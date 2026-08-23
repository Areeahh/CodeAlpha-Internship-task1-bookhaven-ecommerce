import { Link } from 'react-router-dom';

const Profile = () => (
  <div className="py-8 md:py-16 px-5 md:px-[8%] min-h-[80vh] bg-cream transition-colors duration-300">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
      
      {/* Sidebar Profile Info */}
      <div className="w-full md:w-1/3">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/10 text-center sticky top-24">
          <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-tr from-coral-light to-coral-dark p-1 mb-6">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-white overflow-hidden">
              <span className="text-4xl">📚</span>
            </div>
          </div>
          <h2 className="text-2xl text-ink font-bold mb-1">Alex Reader</h2>
          <p className="text-ink/50 mb-6">alex.reader@example.com</p>
          
          <div className="flex justify-center gap-4 mb-8">
            <div className="text-center">
              <span className="block text-xl font-bold text-ink">12</span>
              <span className="text-xs text-ink/50">Orders</span>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-ink">5</span>
              <span className="text-xs text-ink/50">Reviews</span>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div className="text-center">
              <span className="block text-xl font-bold text-ink">3</span>
              <span className="text-xs text-ink/50">Wishlist</span>
            </div>
          </div>

          <button className="w-full bg-coral text-white py-3 rounded-full font-semibold transition-all hover:bg-coral-light mb-3">
            Edit Profile
          </button>
          <button className="w-full bg-gray-100 text-ink py-3 rounded-full font-semibold transition-all hover:bg-gray-200">
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full md:w-2/3 flex flex-col gap-8">
        
        {/* Recent Orders */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl text-ink font-bold">Recent Orders</h3>
            <Link to="/orders" className="text-coral text-sm hover:underline">View All</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-cream rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-gray-200 rounded overflow-hidden">
                  <img src="/images/1984.jpeg" alt="1984" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-ink font-semibold">1984</h4>
                  <p className="text-xs text-ink/50">Order #ORD-8432 • Delivered</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-bold text-ink">$12.99</span>
                <button className="text-xs text-coral hover:underline">Track</button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-cream rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-16 bg-gray-200 rounded overflow-hidden">
                  <img src="/images/alchemist.jpeg" alt="The Alchemist" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-ink font-semibold">The Alchemist</h4>
                  <p className="text-xs text-ink/50">Order #ORD-8430 • Delivered</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-bold text-ink">$14.99</span>
                <button className="text-xs text-coral hover:underline">Track</button>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-ink/10">
          <h3 className="text-xl text-ink font-bold mb-6">Account Settings</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink">Full Name</label>
              <input type="text" defaultValue="Alex Reader" className="p-3 bg-cream border border-ink/15 rounded-xl focus:outline-none focus:border-coral" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink">Email Address</label>
              <input type="email" defaultValue="alex.reader@example.com" className="p-3 bg-cream border border-ink/15 rounded-xl focus:outline-none focus:border-coral" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink">Phone Number</label>
              <input type="tel" placeholder="+1 (555) 000-0000" className="p-3 bg-cream border border-ink/15 rounded-xl focus:outline-none focus:border-coral" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-ink">Shipping Address</label>
              <input type="text" placeholder="123 Book St, NY" className="p-3 bg-cream border border-ink/15 rounded-xl focus:outline-none focus:border-coral" />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="bg-charcoal-light text-white px-6 py-3 rounded-full font-semibold transition-all hover:bg-gray-700">
              Save Changes
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Profile;
