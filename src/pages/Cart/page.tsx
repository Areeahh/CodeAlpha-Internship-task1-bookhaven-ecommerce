import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiFetch, isLoggedIn } from '../../lib/api';

interface CartItem {
  cart_item_id: number;
  book_id: number;
  title: string;
  author: string;
  price: string | number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [placingOrder, setPlacingOrder] = useState(false);

  async function loadCart() {
    setLoading(true);
    try {
      const data = await apiFetch('/cart');
      setItems(data.items);
      setSubtotal(data.subtotal);
    } catch (err: any) {
      setError(err.message || 'Failed to load cart');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/login');
      return;
    }
    loadCart();
  }, []);

  async function handleQuantityChange(cartItemId: number, quantity: number) {
    if (quantity < 1) return;
    try {
      await apiFetch(`/cart/${cartItemId}`, {
        method: 'PUT',
        body: JSON.stringify({ quantity }),
      });
      loadCart();
    } catch (err: any) {
      alert(err.message || 'Failed to update quantity');
    }
  }

  async function handleRemove(cartItemId: number) {
    try {
      await apiFetch(`/cart/${cartItemId}`, { method: 'DELETE' });
      loadCart();
    } catch (err: any) {
      alert(err.message || 'Failed to remove item');
    }
  }

  async function handleCheckout() {
    setPlacingOrder(true);
    try {
      await apiFetch('/orders', { method: 'POST' });
      alert('Order placed successfully!');
      loadCart();
    } catch (err: any) {
      alert(err.message || 'Checkout failed');
    } finally {
      setPlacingOrder(false);
    }
  }

  if (loading) {
    return (
      <div className="py-16 px-[8%] bg-gray-50 dark:bg-gray-900 min-h-[70vh]">
        <p className="text-center text-gray-500 dark:text-gray-400">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="py-16 px-[8%] bg-gray-50 dark:bg-gray-900 min-h-[70vh] transition-colors duration-300">
      <h1 className="text-center text-gray-800 dark:text-white text-3xl md:text-4xl mb-2">Shopping Cart</h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">Manage your items</p>

      {error && <p className="text-center text-red-500 mb-6">{error}</p>}

      {items.length === 0 && !error ? (
        <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
          Your cart is empty. <a href="/shop" className="text-orange-600 hover:underline">Go shopping</a>.
        </p>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-x-auto shadow-sm border border-transparent dark:border-gray-700">
            <table className="w-full border-collapse min-w-150">
              <thead>
                <tr className="bg-gray-800 dark:bg-gray-950 text-white">
                  <th className="p-4 text-left font-semibold">Book</th>
                  <th className="p-4 text-left font-semibold">Price</th>
                  <th className="p-4 text-left font-semibold">Quantity</th>
                  <th className="p-4 text-left font-semibold">Total</th>
                  <th className="p-4 text-left font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const price = Number(item.price);
                  return (
                    <tr key={item.cart_item_id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-5 align-middle">
                        <div className="flex items-center gap-4">
                          <img src={item.image} alt={item.title} className="w-15 h-20 object-cover rounded-lg shadow-sm" />
                          <div className="cart-info">
                            <h4 className="text-gray-800 dark:text-gray-200 mb-1">{item.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.author}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 align-middle text-gray-800 dark:text-gray-200 font-medium">${price.toFixed(2)}</td>
                      <td className="p-5 align-middle">
                        <input
                          type="number"
                          className="w-16.25 p-2 border border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg text-center focus:outline-none focus:border-orange-500"
                          value={item.quantity}
                          min="1"
                          onChange={(e) => handleQuantityChange(item.cart_item_id, Number(e.target.value))}
                        />
                      </td>
                      <td className="p-5 align-middle font-bold text-gray-800 dark:text-white">${(price * item.quantity).toFixed(2)}</td>
                      <td className="p-5 align-middle">
                        <button
                          onClick={() => handleRemove(item.cart_item_id)}
                          className="bg-transparent border-none text-xl cursor-pointer text-gray-400 transition-colors hover:text-red-500"
                          type="button"
                        >
                          ✕
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end gap-7.5 mt-8 flex-wrap">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl min-w-70 shadow-sm border border-transparent dark:border-gray-700">
              <h3 className="text-gray-800 dark:text-white mb-5 pb-2 border-b-2 border-gray-100 dark:border-gray-700">Order Summary</h3>
              <div className="flex justify-between py-2 text-gray-800 dark:text-gray-300">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 text-gray-800 dark:text-gray-300">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="h-px bg-gray-100 dark:bg-gray-700 my-2"></div>
              <div className="flex justify-between py-2 text-xl font-bold text-gray-800 dark:text-white">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={placingOrder}
                className="w-full mt-4 mb-2 bg-orange-600 border-none cursor-pointer text-white py-3 rounded-full font-semibold hover:bg-orange-500 transition-colors disabled:opacity-50"
                type="button"
              >
                {placingOrder ? 'Placing order...' : 'Proceed to Checkout'}
              </button>
              <a href="/shop" className="block text-center text-gray-500 dark:text-gray-400 no-underline text-sm hover:text-orange-600 transition-colors">
                Continue Shopping
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
