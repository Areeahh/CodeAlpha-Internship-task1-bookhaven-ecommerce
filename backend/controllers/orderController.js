const pool = require('../config/db');
const { getOrCreateCart } = require('./cartController');

// Checkout: convert current cart into an order, then clear the cart
async function createOrder(req, res) {
  const client = await pool.connect();

  try {
    const cartId = await getOrCreateCart(req.user.id);

    const cartItems = await client.query(
      `SELECT ci.book_id, ci.quantity, b.price
       FROM cart_items ci
       JOIN books b ON b.id = ci.book_id
       WHERE ci.cart_id = $1`,
      [cartId]
    );

    if (cartItems.rows.length === 0) {
      return res.status(400).json({ error: 'Cart is empty' });
    }

    const totalAmount = cartItems.rows.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );

    await client.query('BEGIN');

    const orderResult = await client.query(
      `INSERT INTO orders (user_id, total_amount, status)
       VALUES ($1, $2, 'pending')
       RETURNING id, total_amount, status, created_at`,
      [req.user.id, totalAmount.toFixed(2)]
    );
    const order = orderResult.rows[0];

    for (const item of cartItems.rows) {
      await client.query(
        `INSERT INTO order_items (order_id, book_id, quantity, price_at_purchase)
         VALUES ($1, $2, $3, $4)`,
        [order.id, item.book_id, item.quantity, item.price]
      );
    }

    await client.query('DELETE FROM cart_items WHERE cart_id = $1', [cartId]);

    await client.query('COMMIT');

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to place order' });
  } finally {
    client.release();
  }
}

async function getOrders(req, res) {
  try {
    const orders = await pool.query(
      `SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC`,
      [req.user.id]
    );

    // Attach line items to each order
    const ordersWithItems = await Promise.all(
      orders.rows.map(async (order) => {
        const items = await pool.query(
          `SELECT oi.quantity, oi.price_at_purchase, b.title, b.author, b.image
           FROM order_items oi
           JOIN books b ON b.id = oi.book_id
           WHERE oi.order_id = $1`,
          [order.id]
        );
        return { ...order, items: items.rows };
      })
    );

    res.json(ordersWithItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

module.exports = { createOrder, getOrders };
