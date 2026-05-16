const Contact = () => (
  <div className="py-16 px-[8%] bg-gray-50 dark:bg-gray-900 min-h-[70vh] transition-colors duration-300">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl text-gray-800 dark:text-white mb-2">Get In Touch</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">We'd love to hear from you</p>
    </div>

    <div className="flex gap-12 flex-wrap">
      <div className="flex-1 min-w-75 bg-white dark:bg-gray-800 p-9 rounded-xl shadow-sm border border-transparent dark:border-gray-700">
        <h2 className="text-gray-800 dark:text-white mb-6 text-2xl">Send us a message</h2>
        <form>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:text-white rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-500" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:text-white rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-500" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Subject</label>
            <input type="text" placeholder="Book inquiry" className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:text-white rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-500" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Message</label>
            <textarea rows={5} placeholder="Tell us what you think..." className="w-full p-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:text-white rounded-lg focus:outline-none focus:border-orange-500 dark:focus:border-orange-500" />
          </div>
          <button type="submit" className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-500 border-none cursor-pointer">
            Send Message
          </button>
        </form>
      </div>

      <div className="flex-1 min-w-75 bg-gray-800 dark:bg-gray-950 p-9 rounded-xl shadow-sm text-white border border-transparent dark:border-gray-800">
        <h2 className="text-orange-600 mb-7.5 text-2xl border-b-2 border-white/20 pb-4">Contact Information</h2>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📍</span>
          <div>
            <h4 className="text-orange-600 mb-2 text-lg">Visit Us</h4>
            <p className="text-white/90 m-0">123 Book Street<br />New York, NY 10001</p>
          </div>
        </div>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📧</span>
          <div>
            <h4 className="text-orange-600 mb-2 text-lg">Email Us</h4>
            <p className="text-white/90 m-0">hello@bookhaven.com</p>
          </div>
        </div>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📞</span>
          <div>
            <h4 className="text-orange-600 mb-2 text-lg">Call Us</h4>
            <p className="text-white/90 m-0">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;