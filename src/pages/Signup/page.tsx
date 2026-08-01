import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiFetch, setSession } from '../../lib/api';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });
      setSession(data.token, data.user);
      navigate('/shop');
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center py-16 px-5 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-md border border-transparent dark:border-gray-700">
        <h2 className="text-center text-gray-800 dark:text-white mb-2 text-3xl">Create Account</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-7.5">Join BookHaven today</p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="p-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg transition-all focus:outline-none focus:border-orange-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="p-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg transition-all focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="p-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg transition-all focus:outline-none focus:border-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="p-3 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg transition-all focus:outline-none focus:border-orange-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-orange-600 text-white py-3 rounded-full font-semibold hover:bg-orange-500 border-none cursor-pointer disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
        <div className="text-center mt-6 text-gray-500 dark:text-gray-400">
          Already have an account? <Link to="/login" className="text-orange-600 no-underline hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
