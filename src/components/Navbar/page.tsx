import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Services', to: '/services' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Profile', to: '/profile' },
  { label: 'Cart', to: '/cart' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [isDark]);

  // Close the mobile menu automatically whenever a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative bg-gray-800 dark:bg-gray-950 sticky top-0 z-1000 shadow-sm transition-colors duration-300">
      <div className="flex justify-between items-center px-5 md:px-[8%] h-17.5">
        <Link to="/" className="no-underline" onClick={closeMenu}>
          <h2 className="text-white text-2xl tracking-wide m-0">
            Book<span className="text-orange-600">Haven</span>
          </h2>
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden lg:flex items-center gap-7.5">
          <ul className="flex list-none gap-5 xl:gap-7.5 m-0 p-0 items-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-white/90 no-underline font-medium transition-all duration-300 text-[0.95rem] hover:text-orange-600 ${isActive ? 'text-orange-600' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-gray-700 hover:bg-gray-600 border-none text-white p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile controls: dark mode + hamburger — shown below lg breakpoint */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="bg-gray-700 hover:bg-gray-600 border-none text-white p-2 rounded-full transition-colors w-10 h-10 flex items-center justify-center cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl leading-none bg-transparent border-none cursor-pointer w-10 h-10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 dark:bg-gray-950 border-t border-gray-700 px-5 py-4">
          <ul className="flex flex-col list-none m-0 p-0 gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-3 text-white/90 no-underline font-medium text-base border-b border-gray-700/50 hover:text-orange-600 transition-colors ${isActive ? 'text-orange-600' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
