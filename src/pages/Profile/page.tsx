import { Link } from 'react-router-dom';

const Profile = () => (
  <div className="py-8 md:py-16 px-5 md:px-[8%] min-h-[80vh] bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
      
      {/* Sidebar Profile Info */}
      <div className="w-full md:w-1/3">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 text-center sticky top-24">
          <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-tr from-orange-400 to-orange-600 p-1 mb-6">
            <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 overflow-hidden">
              <span className="text-4xl">📚</span>
            </div>
          </div>
          <h2 className="text-2xl text-gray-800 dark:text-white font-bold mb-1">Alex Reader</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">alex.reader@example.com</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800 dark:text-white">12</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Orders</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800 dark:text-white">5</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Reviews</span>
            </div>
            <div className="w-px bg-gray-200 dark:bg-gray-700"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-gray-800 dark:text-white">3</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Wishlist</span>
            </div>
          </div>

          <button className="w-full bg-orange-600 text-white py-3 rounded-full font-semibold transition-all hover:bg-orange-500 mb-3">
            Edit Profile
          </button>
          <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white py-3 rounded-full font-semibold transition-all hover:bg-gray-200 dark:hover:bg-gray-600">
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        
        {/* Recent Orders */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl text-gray-800 dark:text-white font-bold">Recent Orders</h3>
            <Link to="/orders" className="text-orange-600 text-sm hover:underline">View All</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
                  <img src="/images/1984.jpeg" alt="1984" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-semibold">1984</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Order #ORD-8432 • Delivered</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 dark:text-white">$12.99</span>
                <button className="text-xs text-orange-600 hover:underline">Track</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-gray-200 dark:bg-gray-600 rounded overflow-hidden">
                  <img src="/images/alchemist.jpeg" alt="The Alchemist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-gray-800 dark:text-white font-semibold">The Alchemist</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Order #ORD-8430 • Delivered</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-bold text-gray-800 dark:text-white">$14.99</span>
                <button className="text-xs text-orange-600 hover:underline">Track</button>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl text-gray-800 dark:text-white font-bold mb-6">Account Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name</label>
              <input type="text" defaultValue="Alex Reader" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 dark:text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
              <input type="email" defaultValue="alex.reader@example.com" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 dark:text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 dark:text-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Shipping Address</label>
              <input type="text" placeholder="123 Book St, NY" className="p-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 dark:text-white" />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-700 dark:hover:bg-white">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Profile;
