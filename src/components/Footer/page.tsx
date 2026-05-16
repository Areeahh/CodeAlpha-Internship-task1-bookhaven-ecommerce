import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 dark:bg-black text-white pt-20 pb-10 mt-12 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300 relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div className="absolute bottom-0 -left-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-[8%] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="no-underline inline-block">
            <h3 className="text-3xl font-bold tracking-wide m-0 text-white">
              Book<span className="text-orange-600">Haven</span>
            </h3>
          </Link>
          <p className="text-gray-400 leading-relaxed text-sm">
            Your sanctuary for the world's most inspiring stories. We carefully curate books that ignite imagination and foster a lifelong love for reading.
          </p>
          <div className="flex gap-4 mt-2">
            {/* Social Icons (SVG) */}
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:text-white transition-all hover:-translate-y-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Explore</h4>
          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
            <li><Link to="/" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Home</Link></li>
            <li><Link to="/shop" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Shop Collection</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Our Services</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> About Us</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care Column */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Customer Care</h4>
          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
            <li><Link to="/login" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Login</Link></li>
            <li><Link to="/signup" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Create Account</Link></li>
            <li><Link to="/dashboard" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Track Order</Link></li>
            <li><Link to="/cart" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Shopping Cart</Link></li>
            <li><Link to="/reviews" className="text-gray-400 hover:text-orange-500 hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-orange-600">▸</span> Reader Reviews</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-lg font-semibold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Get In Touch</h4>
          <ul className="flex flex-col gap-4 p-0 m-0 list-none text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-orange-600 mt-1">📍</span>
              <p className="m-0 leading-relaxed">123 BookHaven Street,<br/>Literary District<br/>New York, NY 10001</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-600">📞</span>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500 transition-colors no-underline">+1 (555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-orange-600">✉️</span>
              <a href="mailto:hello@bookhaven.com" className="text-gray-400 hover:text-orange-500 transition-colors no-underline">hello@bookhaven.com</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative z-10 border-t border-gray-800 pt-8 mt-4">
      <div className="max-w-7xl mx-auto px-[8%] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p className="m-0">© 2026 BookHaven Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-gray-500 hover:text-orange-500 transition-colors no-underline">Privacy Policy</Link>
          <Link to="#" className="text-gray-500 hover:text-orange-500 transition-colors no-underline">Terms of Service</Link>
          <Link to="#" className="text-gray-500 hover:text-orange-500 transition-colors no-underline">Shipping Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;