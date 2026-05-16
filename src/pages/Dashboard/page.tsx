const Dashboard = () => (
  <div className="flex min-h-[calc(100vh-70px)] dark:bg-gray-900 transition-colors duration-300">
    <div className="w-65 bg-gray-800 dark:bg-gray-950 text-white shrink-0 sticky top-17.5 self-start min-h-screen border-r border-transparent dark:border-gray-800">
      <div className="text-center py-7.5 px-5 border-b border-white/10 dark:border-gray-800">
        <div className="w-17.5 h-17.5 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg shadow-orange-600/20">AD</div>
        <p className="text-gray-200">Admin Portal</p>
      </div>
      <nav className="flex flex-col pb-5 pt-2">
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">📊 Overview</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">📦 Inventory</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">📈 Sales Reports</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">👥 Users</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">⚙️ Settings</a>
        <a href="/dashboard" className="block py-3 px-6 text-white/80 no-underline transition-all border-l-3 border-transparent hover:bg-white/10 hover:text-orange-500 hover:border-l-orange-500">📁 Export Data</a>
      </nav>
    </div>

    <div className="flex-1 p-7.5 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex justify-between items-center mb-7.5 flex-wrap gap-4">
        <h2 className="text-gray-800 dark:text-white text-2xl font-semibold">Stock Management</h2>
        <div className="flex gap-5">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center min-w-30 border border-transparent dark:border-gray-700 hover:-translate-y-1 transition-transform">
            <strong className="block text-3xl text-gray-800 dark:text-white mb-1">1,240</strong>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Total Items</span>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm text-center min-w-30 border border-transparent dark:border-gray-700 hover:-translate-y-1 transition-transform">
            <strong className="block text-3xl text-gray-800 dark:text-white mb-1">42</strong>
            <span className="text-gray-500 dark:text-gray-400 text-sm">Pending Orders</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700 group">
          <div className="text-3xl block mb-3 group-hover:scale-110 transition-transform">📋</div>
          <h4 className="text-gray-800 dark:text-gray-200 mb-4 text-base">View All Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 cursor-pointer border-none shadow-sm shadow-orange-600/30">View</button>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700 group">
          <div className="text-3xl block mb-3 group-hover:scale-110 transition-transform">🗑️</div>
          <h4 className="text-gray-800 dark:text-gray-200 mb-4 text-base">Delete Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 cursor-pointer border-none shadow-sm shadow-orange-600/30">Remove</button>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700 group">
          <div className="text-3xl block mb-3 group-hover:scale-110 transition-transform">🔄</div>
          <h4 className="text-gray-800 dark:text-gray-200 mb-4 text-base">Update Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 cursor-pointer border-none shadow-sm shadow-orange-600/30">Edit</button>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 text-center rounded-xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md border border-transparent dark:border-gray-700 group">
          <div className="text-3xl block mb-3 group-hover:scale-110 transition-transform">➕</div>
          <h4 className="text-gray-800 dark:text-gray-200 mb-4 text-base">New Stock</h4>
          <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-xs font-semibold hover:bg-orange-500 cursor-pointer border-none shadow-sm shadow-orange-600/30">Add</button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-7.5 shadow-sm border border-transparent dark:border-gray-700">
        <h3 className="text-gray-800 dark:text-white mb-5 text-xl flex items-center gap-2"><span>🆕</span> Unseen Orders</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 dark:bg-gray-950 text-white">
                <th className="p-3 text-left font-medium rounded-tl-lg">Order ID</th>
                <th className="p-3 text-left font-medium">Customer</th>
                <th className="p-3 text-left font-medium">Book</th>
                <th className="p-3 text-left font-medium">Amount</th>
                <th className="p-3 text-left font-medium rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-3 text-gray-800 dark:text-gray-200 font-medium">#ORD-001</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">john@email.com</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">1984</td>
                <td className="p-3 text-gray-800 dark:text-gray-200 font-semibold">$12.99</td>
                <td className="p-3"><span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 px-3 py-1 rounded-full text-xs font-semibold inline-block">Pending</span></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-3 text-gray-800 dark:text-gray-200 font-medium">#ORD-002</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">jane@email.com</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">The Alchemist</td>
                <td className="p-3 text-gray-800 dark:text-gray-200 font-semibold">$14.99</td>
                <td className="p-3"><span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 px-3 py-1 rounded-full text-xs font-semibold inline-block">Pending</span></td>
              </tr>
              <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="p-3 text-gray-800 dark:text-gray-200 font-medium">#ORD-003</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">mike@email.com</td>
                <td className="p-3 text-gray-600 dark:text-gray-400">Mockingbird</td>
                <td className="p-3 text-gray-800 dark:text-gray-200 font-semibold">$11.99</td>
                <td className="p-3"><span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-500 px-3 py-1 rounded-full text-xs font-semibold inline-block">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm mb-7.5 border border-transparent dark:border-gray-700">
        <h3 className="text-gray-800 dark:text-white mb-5 text-center text-xl">Monthly Inventory Growth - 2026</h3>
        <div className="flex items-end justify-center gap-10 p-5 flex-wrap">
          <div className="flex flex-col items-center text-center group">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-15 group-hover:bg-orange-500 transition-colors"></div>
            <div className="font-bold text-gray-800 dark:text-gray-200">30</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Jan</div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-27.5 group-hover:bg-orange-500 transition-colors"></div>
            <div className="font-bold text-gray-800 dark:text-gray-200">55</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Feb</div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-22.5 group-hover:bg-orange-500 transition-colors"></div>
            <div className="font-bold text-gray-800 dark:text-gray-200">45</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Mar</div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-42.5 group-hover:bg-orange-500 transition-colors"></div>
            <div className="font-bold text-gray-800 dark:text-gray-200">85</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Apr</div>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-12.5 bg-orange-600 rounded-t-lg mb-2 h-35 group-hover:bg-orange-500 transition-colors"></div>
            <div className="font-bold text-gray-800 dark:text-gray-200">70</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">May</div>
          </div>
        </div>
      </div>

      {/* --- NEW FEATURES START HERE --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7.5 mb-7.5">
        
        {/* Recent Activity Timeline */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 border-b border-gray-100 dark:border-gray-700 pb-3">
            <h3 className="text-gray-800 dark:text-white text-xl font-semibold">Recent Activity</h3>
            <button className="text-orange-600 text-sm hover:underline border-none bg-transparent cursor-pointer font-medium">View All</button>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 group">
              <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-green-500 shrink-0 shadow-sm shadow-green-500/50 group-hover:scale-125 transition-transform"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">New user registered: <strong>Sarah Johnson</strong></p>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">10 mins ago</span>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-blue-500 shrink-0 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">Order <strong className="text-orange-600">#ORD-003</strong> shipped</p>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">45 mins ago</span>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-purple-500 shrink-0 shadow-sm shadow-purple-500/50 group-hover:scale-125 transition-transform"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">Restocked: <strong>The Alchemist</strong> (50 units)</p>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">2 hours ago</span>
              </div>
            </div>
            <div className="flex gap-4 group">
              <div className="w-2.5 h-2.5 mt-1.5 rounded-full bg-orange-500 shrink-0 shadow-sm shadow-orange-500/50 group-hover:scale-125 transition-transform"></div>
              <div>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">System backup completed successfully</p>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Selling Books */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-transparent dark:border-gray-700">
          <div className="flex justify-between items-center mb-5 border-b border-gray-100 dark:border-gray-700 pb-3">
            <h3 className="text-gray-800 dark:text-white text-xl font-semibold">Top Selling Books</h3>
            <button className="text-orange-600 text-sm hover:underline border-none bg-transparent cursor-pointer font-medium flex items-center gap-1">
              <span>📥</span> Export
            </button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-600">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-400 dark:text-gray-500 w-4 text-center">1</span>
                <img src="/images/1984.jpeg" alt="1984" className="w-11 h-16 object-cover rounded shadow-sm" />
                <div>
                  <h4 className="text-sm text-gray-800 dark:text-gray-200 font-semibold mb-0.5">1984</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">George Orwell</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold text-gray-800 dark:text-white">342</span>
                <span className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full mt-1 inline-block">Sales</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-600">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-400 dark:text-gray-500 w-4 text-center">2</span>
                <img src="/images/dune.jpeg" alt="Dune" className="w-11 h-16 object-cover rounded shadow-sm" />
                <div>
                  <h4 className="text-sm text-gray-800 dark:text-gray-200 font-semibold mb-0.5">Dune</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Frank Herbert</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold text-gray-800 dark:text-white">285</span>
                <span className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full mt-1 inline-block">Sales</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2.5 hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-xl transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-600">
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-400 dark:text-gray-500 w-4 text-center">3</span>
                <img src="/images/mockingbird.jpeg" alt="Mockingbird" className="w-11 h-16 object-cover rounded shadow-sm" />
                <div>
                  <h4 className="text-sm text-gray-800 dark:text-gray-200 font-semibold mb-0.5">Mockingbird</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Harper Lee</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-sm font-bold text-gray-800 dark:text-white">194</span>
                <span className="text-xs font-semibold text-green-500 bg-green-50 dark:bg-green-500/10 px-2 py-0.5 rounded-full mt-1 inline-block">Sales</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* --- NEW FEATURES END HERE --- */}

    </div>
  </div>
);

export default Dashboard;