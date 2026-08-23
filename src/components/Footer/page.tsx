import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-charcoal text-cream pt-16 md:pt-20 pb-10 mt-12 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-coral via-coral-light to-coral"></div>
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-coral/10 rounded-full blur-3xl pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-5 md:px-[8%] relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">

        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="no-underline inline-block">
            <h3 className="font-display italic text-3xl tracking-wide m-0 text-cream">
              Book<span className="text-coral not-italic">Haven</span>
            </h3>
          </Link>
          <p className="text-cream/50 leading-relaxed text-sm">
            Your sanctuary for the world's most inspiring stories. We carefully curate books that ignite imagination and foster a lifelong love for reading.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-lg font-display mb-6 text-cream border-b border-cream/15 pb-2 inline-block">Explore</h4>
          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
            <li><Link to="/" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Home</Link></li>
            <li><Link to="/shop" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Shop Collection</Link></li>
            <li><Link to="/services" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Our Services</Link></li>
            <li><Link to="/contact" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Contact</Link></li>
          </ul>
        </div>

        {/* Customer Care Column */}
        <div>
          <h4 className="text-lg font-display mb-6 text-cream border-b border-cream/15 pb-2 inline-block">Customer Care</h4>
          <ul className="flex flex-col gap-3 p-0 m-0 list-none">
            <li><Link to="/login" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Login</Link></li>
            <li><Link to="/signup" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Create Account</Link></li>
            <li><Link to="/dashboard" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Track Order</Link></li>
            <li><Link to="/cart" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Shopping Cart</Link></li>
            <li><Link to="/reviews" className="text-cream/50 hover:text-coral-light hover:pl-2 transition-all no-underline flex items-center gap-2"><span className="text-xs text-coral">▸</span> Reader Reviews</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="text-lg font-display mb-6 text-cream border-b border-cream/15 pb-2 inline-block">Get In Touch</h4>
          <ul className="flex flex-col gap-4 p-0 m-0 list-none text-cream/50 text-sm">
            <li className="flex items-start gap-3">
              <span className="text-coral mt-1">📍</span>
              <p className="m-0 leading-relaxed">123 BookHaven Street,<br/>Literary District<br/>New York, NY 10001</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">📞</span>
              <a href="tel:+1234567890" className="text-cream/50 hover:text-coral-light transition-colors no-underline">+1 (555) 123-4567</a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-coral">✉️</span>
              <a href="mailto:hello@bookhaven.com" className="text-cream/50 hover:text-coral-light transition-colors no-underline">hello@bookhaven.com</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative z-10 border-t border-cream/10 pt-8 mt-4">
      <div className="max-w-7xl mx-auto px-5 md:px-[8%] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/40">
        <p className="m-0">© 2026 BookHaven Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-cream/40 hover:text-coral-light transition-colors no-underline">Privacy Policy</Link>
          <Link to="#" className="text-cream/40 hover:text-coral-light transition-colors no-underline">Terms of Service</Link>
          <Link to="#" className="text-cream/40 hover:text-coral-light transition-colors no-underline">Shipping Policy</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
