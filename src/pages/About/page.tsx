import { Link } from 'react-router-dom';

const About = () => (
  <div className="transition-colors duration-300">
    <div className="h-[50vh] bg-linear-to-b from-black/50 to-black/50 bg-[url('https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-5">
      <h1 className="text-4xl md:text-5xl mb-4">About BookHaven</h1>
      <p className="text-lg mb-6 opacity-90">Your sanctuary for the world's most inspiring stories</p>
      <Link to="/shop" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500 no-underline">
        Browse Our Books →
      </Link>
    </div>

    <div className="py-20 px-[8%] bg-white dark:bg-gray-900 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-5xl mb-5">📚</div>
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-5">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 leading-relaxed">
          At BookHaven, we believe that books have the power to change lives. Founded in 2026, our mission is to provide a curated selection of literature that inspires, educates, and entertains readers of all ages.
        </p>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-gray-50 dark:bg-gray-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">📖</div>
            <h3 className="text-gray-800 dark:text-gray-200 mb-2">Quality</h3>
            <p className="text-gray-500 dark:text-gray-400">Every book hand-picked by literary experts</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">🌍</div>
            <h3 className="text-gray-800 dark:text-gray-200 mb-2">Community</h3>
            <p className="text-gray-500 dark:text-gray-400">Building a global family of book lovers</p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-4xl block mb-4">⚡</div>
            <h3 className="text-gray-800 dark:text-gray-200 mb-2">Accessibility</h3>
            <p className="text-gray-500 dark:text-gray-400">Making great books affordable for everyone</p>
          </div>
        </div>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-white dark:bg-gray-900 transition-colors">
      <div className="flex gap-16 items-center flex-wrap max-w-6xl mx-auto">
        <div className="flex-1 min-w-70">
          <img src="/images/books1.jpeg" alt="BookHaven Bookstore" className="w-full rounded-xl shadow-md" />
        </div>
        <div className="flex-1 min-w-70">
          <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-5">Our Story</h2>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            BookHaven started as a small passion project and grew into a beloved online bookstore. We're committed to bringing the joy of reading to book lovers everywhere. What started in a small office has now become a thriving community of readers across the globe.
          </p>
          <Link to="/shop" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold inline-block transition-all hover:bg-orange-500 no-underline">
            Start Reading Today →
          </Link>
        </div>
      </div>
    </div>

    <div className="py-20 px-[8%] bg-gray-50 dark:bg-gray-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">10K+</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">Happy Readers</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">Books Available</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">25+</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">Expert Authors</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-10 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-all text-center hover:-translate-y-1 hover:shadow-md">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">4.9★</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">Customer Rating</div>
          </div>
        </div>
      </div>
    </div>

    {/* Team Section */}
    <div className="py-20 px-[8%] bg-white dark:bg-gray-900 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-5">
        <h2 className="text-3xl md:text-4xl text-gray-800 dark:text-white mb-4">Meet Our Team</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">The passionate individuals behind BookHaven who work tirelessly to bring the joy of reading to your doorstep.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <div className="group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50 dark:border-gray-800 shadow-md group-hover:border-orange-200 dark:group-hover:border-orange-900 transition-colors">
              <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" alt="CEO" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-800 dark:text-white font-bold mb-1">David Smith</h3>
            <p className="text-orange-600 text-sm font-medium mb-3">Founder & CEO</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Visionary leader with a passion for classic literature.</p>
          </div>
          
          {/* Team Member 2 */}
          <div className="group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50 dark:border-gray-800 shadow-md group-hover:border-orange-200 dark:group-hover:border-orange-900 transition-colors">
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Head of Curation" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-800 dark:text-white font-bold mb-1">Sarah Jenkins</h3>
            <p className="text-orange-600 text-sm font-medium mb-3">Head of Curation</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Expert in uncovering hidden literary gems.</p>
          </div>
          
          {/* Team Member 3 */}
          <div className="group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50 dark:border-gray-800 shadow-md group-hover:border-orange-200 dark:group-hover:border-orange-900 transition-colors">
              <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Marketing Director" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-800 dark:text-white font-bold mb-1">Michael Chang</h3>
            <p className="text-orange-600 text-sm font-medium mb-3">Marketing Director</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Connecting great books with avid readers globally.</p>
          </div>

          {/* Team Member 4 */}
          <div className="group">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-gray-50 dark:border-gray-800 shadow-md group-hover:border-orange-200 dark:group-hover:border-orange-900 transition-colors">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Customer Success" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl text-gray-800 dark:text-white font-bold mb-1">Emily Rodriguez</h3>
            <p className="text-orange-600 text-sm font-medium mb-3">Customer Success</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Ensuring every order brings a smile.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;