import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Services', to: '/services' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Profile', to: '/profile' },
  { label: 'Cart', to: '/cart' },
  { label: 'Contact', to: '/contact' },
  { label: 'Login', to: '/login' },
  { label: 'Sign Up', to: '/signup' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative bg-cream/95 backdrop-blur-sm sticky top-0 z-1000 border-b border-ink/10">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-[6%] h-16 md:h-20">
        <Link to="/" className="no-underline" onClick={closeMenu}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl tracking-wide m-0 text-ink italic">
            Book<span className="text-coral not-italic">Haven</span>
          </h2>
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex list-none gap-5 xl:gap-7 m-0 p-0 items-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `no-underline font-medium transition-colors duration-300 text-[0.9rem] tracking-wide uppercase text-ink/70 hover:text-coral ${isActive ? 'text-coral' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-ink text-2xl leading-none bg-transparent border-none cursor-pointer w-10 h-10 flex items-center justify-center flex-shrink-0"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-cream border-t border-ink/10 px-6 py-4">
          <ul className="flex flex-col list-none m-0 p-0 gap-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-3 no-underline font-medium text-base tracking-wide border-b border-ink/10 text-ink/80 hover:text-coral transition-colors ${isActive ? 'text-coral' : ''}`
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
