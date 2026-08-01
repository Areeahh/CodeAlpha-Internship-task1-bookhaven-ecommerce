import { Link } from 'react-router-dom';
import Header from '../../components/Header/page';

const features = [
  { icon: '📦', title: 'Free Shipping', description: 'On all orders over $35' },
  { icon: '📖', title: 'Curated Choice', description: 'Hand-picked by experts' },
  { icon: '✨', title: 'New Releases', description: 'Get early access' }
];

const categories = [
  { icon: '📖', title: 'Fiction', subtitle: '120+ books' },
  { icon: '📜', title: 'Classics', subtitle: '85+ books' },
  { icon: '✨', title: 'Fantasy', subtitle: '65+ books' },
  { icon: '🔍', title: 'Mystery', subtitle: '45+ books' }
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
  <div className="dark:bg-gray-900 transition-colors duration-300">
    <Header
      title="Escape Into a New World"
      subtitle="From timeless classics to modern bestsellers, find your next favorite story."
      buttonText="Browse Services →"
      buttonLink="/services"
    />

    {/* Features Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-[8%] bg-white dark:bg-gray-900 transition-colors duration-300">
      {features.map((item) => (
        <div key={item.title} className="text-center p-10 bg-gray-50 dark:bg-gray-800 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700">
          <div className="text-4xl mb-4">{item.icon}</div>
          <h3 className="text-xl mb-2 text-gray-800 dark:text-white">{item.title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
        </div>
      ))}
    </div>

    {/* Categories Section */}
    <div className="py-8 md:py-16 px-5 md:px-[8%] bg-white dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {categories.map((item) => (
            <Link key={item.title} to="/services" className="bg-gray-50 dark:bg-gray-800 py-8 px-4 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md text-center block no-underline border border-transparent dark:border-gray-700">
              <span className="text-3xl block mb-3">{item.icon}</span>
              <h3 className="text-gray-800 dark:text-white mb-1 text-lg">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{item.subtitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Best Sellers Section */}
    <div className="py-8 md:py-16 px-5 md:px-[8%] bg-gray-50 dark:bg-gray-800 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-10">📚 Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestsellers.map((book) => (
            <div key={book.title} className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700">
              <div className="h-48 flex items-center justify-center mb-4">
                <img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-gray-800 dark:text-white mb-1 text-base">{book.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{book.author}</p>
              <span className="font-bold text-orange-600 block mb-3">{book.price}</span>
              <button className="bg-orange-600 text-white px-4 py-1.5 rounded-full font-semibold text-xs w-full transition-all hover:bg-orange-500 hover:-translate-y-0.5 border-none cursor-pointer">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500 hover:-translate-y-0.5 no-underline">
            View All Books →
          </Link>
        </div>
      </div>
    </div>

    {/* About Section */}
    <div className="flex items-center gap-16 py-20 px-[8%] bg-white dark:bg-gray-900 flex-wrap transition-colors duration-300">
      <div className="flex-1 min-w-70">
        <img src="/images/books1.jpeg" alt="Bookstore" className="w-full rounded-2xl shadow-lg" />
      </div>
      <div className="flex-1 min-w-70">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-5">Our Story</h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
          BookHaven started as a small passion project and grew into a beloved online bookstore. We are committed to bringing the joy of reading to book lovers everywhere.
        </p>
        <Link to="/services" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500 no-underline">
          Learn More →
        </Link>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="py-8 md:py-16 px-5 md:px-[8%] bg-white dark:bg-gray-900 text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-10">What Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-700">
              <div className="text-4xl text-orange-600 font-serif mb-2">"</div>
              <p className="text-gray-800 dark:text-gray-200 italic mb-4 text-sm">{item.quote}</p>
              <div className="customer">
                <strong className="block text-gray-800 dark:text-white mb-1 text-sm">- {item.name}</strong>
                <span className="text-orange-600 text-xs">⭐⭐⭐⭐⭐</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/reviews" className="text-orange-600 font-semibold hover:underline">Read All Reviews →</Link>
        </div>
      </div>
    </div>

    {/* Newsletter Section */}
    <div className="py-8 md:py-16 px-5 md:px-[8%] bg-linear-to-br from-gray-800 to-gray-900 dark:from-black dark:to-gray-900 text-white text-center transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl mb-4">Join Our Newsletter</h2>
        <p className="mb-6 opacity-90">Get 10% off your first order and exclusive book recommendations.</p>
        <div className="flex gap-4 justify-center flex-wrap max-w-md mx-auto">
          <input type="email" placeholder="Enter your email address" className="flex-1 py-3 px-5 border-none rounded-full text-sm min-w-55 focus:outline-none text-gray-800" />
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-white hover:text-gray-800 border-none cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
