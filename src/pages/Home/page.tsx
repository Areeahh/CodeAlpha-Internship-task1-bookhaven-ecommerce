import { Link } from 'react-router-dom';
import FloatingBook3D from '../../components/FloatingBook3D/page';

const features = [
  { title: 'Free Shipping', description: 'On all orders over $35' },
  { title: 'Curated Choice', description: 'Hand-picked by experts' },
  { title: 'New Releases', description: 'Get early access' }
];

const categories = [
  { title: 'Fiction', subtitle: '120+ books' },
  { title: 'Classics', subtitle: '85+ books' },
  { title: 'Fantasy', subtitle: '65+ books' },
  { title: 'Mystery', subtitle: '45+ books' }
];

const bestsellers = [
  { image: '/images/1984.jpeg', title: '1984', author: 'George Orwell', price: '$12.99' },
  { image: '/images/alchemist.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', price: '$14.99' },
  { image: '/images/mockingbird.jpeg', title: 'Mockingbird', author: 'Harper Lee', price: '$11.99' },
  { image: '/images/dune.jpeg', title: 'Dune', author: 'Frank Herbert', price: '$15.99' }
];

const testimonials = [
  { quote: 'Amazing collection! Fast shipping and great prices.', name: 'Sarah Johnson' },
  { quote: 'Best online bookstore! Found all my favorite classics.', name: 'Michael Chen' },
  { quote: 'Love the curated selections. Always find something great!', name: 'Emma Davis' }
];

const Home = () => (
  <div className="bg-cream">

    {/* Hero */}
    <div className="relative overflow-hidden bg-linear-to-b from-coral-light via-blush to-cream">
      <div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-10 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-ink leading-tight mb-6">
            Beyond pages<br />into wonder
          </h1>
          <p className="text-ink/70 text-base md:text-lg max-w-md mx-auto md:mx-0 mb-8">
            From timeless classics to modern bestsellers — a curated shelf for every kind of reader.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-ink text-cream px-8 py-3.5 rounded-full font-medium tracking-wide no-underline transition-all hover:bg-coral"
          >
            See All Books
          </Link>
        </div>
        <div className="order-1 md:order-2">
          <FloatingBook3D />
        </div>
      </div>

      {/* Oversized editorial wordmark */}
      <div className="text-center pb-4 md:pb-8 select-none pointer-events-none">
        <h2 className="font-display italic text-[16vw] md:text-[9rem] leading-none text-ink/10">
          BookHaven
        </h2>
      </div>
    </div>

    {/* Features Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 py-10 md:py-20 px-5 md:px-[8%] bg-cream">
      {features.map((item) => (
        <div key={item.title} className="text-center p-8 md:p-10 bg-white rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg border border-ink/5">
          <h3 className="font-display text-xl mb-2 text-ink">{item.title}</h3>
          <p className="text-ink/60 text-sm">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Categories Section */}
    <div className="py-10 md:py-16 px-5 md:px-[8%] bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {categories.map((item) => (
            <Link
              key={item.title}
              to="/shop"
              className="bg-cream py-8 px-4 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-md text-center block no-underline border border-ink/5"
            >
              <h3 className="font-display text-ink mb-1 text-lg">{item.title}</h3>
              <p className="text-ink/50 text-xs">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Best Sellers Section */}
    <div className="py-10 md:py-16 px-5 md:px-[8%] bg-blush/40 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-10">Best Sellers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {bestsellers.map((book) => (
            <div key={book.title} className="bg-white rounded-2xl p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg border border-ink/5">
              <div className="h-40 md:h-48 flex items-center justify-center mb-4">
                <img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain rounded" />
              </div>
              <h3 className="text-ink mb-1 text-sm md:text-base font-display">{book.title}</h3>
              <p className="text-ink/50 text-xs mb-2">{book.author}</p>
              <span className="font-semibold text-coral block">{book.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/shop" className="bg-ink text-cream px-7 py-3 rounded-full font-medium tracking-wide inline-block transition-all hover:bg-coral no-underline">
            View All Books →
          </Link>
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="flex items-center gap-8 md:gap-16 py-10 md:py-20 px-5 md:px-[8%] bg-cream flex-wrap">
      <div className="flex-1 min-w-70">
        <img src="/images/books1.jpeg" alt="Bookstore" className="w-full rounded-2xl shadow-lg" />
      </div>
      <div className="flex-1 min-w-70">
        <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-5">Our Story</h2>
        <p className="text-ink/60 leading-relaxed mb-6">
          BookHaven started as a small passion project and grew into a beloved online bookstore. We are committed to bringing the joy of reading to book lovers everywhere.
        </p>
        <Link to="/about" className="bg-ink text-cream px-6 py-3 rounded-full font-medium tracking-wide inline-block transition-all hover:bg-coral no-underline">
          Learn More →
        </Link>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="py-10 md:py-16 px-5 md:px-[8%] bg-white text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-10">What Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-cream p-6 rounded-2xl border border-ink/5">
              <div className="text-4xl text-coral font-display mb-2">"</div>
              <p className="text-ink/70 italic mb-4 text-sm">{item.quote}</p>
              <strong className="block text-ink text-sm font-display">— {item.name}</strong>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/reviews" className="text-coral font-medium hover:underline">Read All Reviews →</Link>
        </div>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="py-10 md:py-16 px-5 md:px-[8%] bg-charcoal text-cream text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display italic text-3xl md:text-4xl mb-4">Join Our Newsletter</h2>
        <p className="mb-6 text-cream/70">Get 10% off your first order and exclusive book recommendations.</p>
        <div className="flex gap-3 justify-center flex-wrap max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 py-3 px-5 border-none rounded-full text-sm min-w-55 focus:outline-none text-ink"
          />
          <button className="bg-coral text-cream px-6 py-3 rounded-full font-medium transition-all hover:bg-coral-dark border-none cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
