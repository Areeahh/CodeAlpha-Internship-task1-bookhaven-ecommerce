const pool = require('../config/db');

// Fetch (or lazily create) the cart for the logged-in user
async function getOrCreateCart(userId) {
  let result = await pool.query('SELECT id FROM carts WHERE user_id = $1', [userId]);
  if (result.rows.length === 0) {
    result = await pool.query(
      'INSERT INTO carts (user_id) VALUES ($1) RETURNING id',
      [userId]
    );
  }
  return result.rows[0].id;
}

async function getCart(req, res) {
  try {
    const cartId = await getOrCreateCart(req.user.id);

    const items = await pool.query(
      `SELECT ci.id AS cart_item_id, ci.quantity, b.id AS book_id,
              b.title, b.author, b.price, b.image
       FROM cart_items ci
       JOIN books b ON b.id = ci.book_id
       WHERE ci.cart_id = $1
       ORDER BY ci.id`,
      [cartId]
    );

    const subtotal = items.rows.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );

    res.json({ items: items.rows, subtotal: Number(subtotal.toFixed(2)) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
}

async function addToCart(req, res) {
  const { bookId, quantity = 1 } = req.body;

  if (!bookId) {
    return res.status(400).json({ error: 'bookId is required' });
  }

  try {
    const cartId = await getOrCreateCart(req.user.id);

    // If the book is already in the cart, bump the quantity instead of duplicating
    await pool.query(
      `INSERT INTO cart_items (cart_id, book_id, quantity)
       VALUES ($1, $2, $3)
       ON CONFLICT (cart_id, book_id)
       DO UPDATE SET quantity = cart_items.quantity + EXCLUDED.quantity`,
      [cartId, bookId, quantity]
    );

    res.status(201).json({ message: 'Item added to cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
}

async function updateCartItem(req, res) {
  const { itemId } = req.params;
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ error: 'quantity must be at least 1' });
  }

  try {
    const cartId = await getOrCreateCart(req.user.id);

    const result = await pool.query(
      `UPDATE cart_items SET quantity = $1
       WHERE id = $2 AND cart_id = $3
       RETURNING id`,
      [quantity, itemId, cartId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Quantity updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update cart item' });
  }
}

async function removeCartItem(req, res) {
  const { itemId } = req.params;

  try {
    const cartId = await getOrCreateCart(req.user.id);

    const result = await pool.query(
      'DELETE FROM cart_items WHERE id = $1 AND cart_id = $2 RETURNING id',
      [itemId, cartId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }

    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to remove cart item' });
  }
}

module.exports = { getOrCreateCart, getCart, addToCart, updateCartItem, removeCartItem };
