const Contact = () => (
  <div className="py-8 md:py-16 px-5 md:px-[8%] bg-cream min-h-[70vh] transition-colors duration-300">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl text-ink mb-2">Get In Touch</h1>
      <p className="text-lg text-ink/50">We'd love to hear from you</p>
    </div>

    <div className="flex gap-12 flex-wrap">
      <div className="flex-1 min-w-75 bg-white p-9 rounded-xl shadow-sm border border-transparent">
        <h2 className="text-ink mb-6 text-2xl">Send us a message</h2>
        <form>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-ink">Your Name</label>
            <input type="text" placeholder="John Doe" className="w-full p-3 border-2 border-ink/15 bg-transparent rounded-lg focus:outline-none focus:border-coral" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-ink">Email Address</label>
            <input type="email" placeholder="john@example.com" className="w-full p-3 border-2 border-ink/15 bg-transparent rounded-lg focus:outline-none focus:border-coral" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-ink">Subject</label>
            <input type="text" placeholder="Book inquiry" className="w-full p-3 border-2 border-ink/15 bg-transparent rounded-lg focus:outline-none focus:border-coral" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 font-semibold text-ink">Message</label>
            <textarea rows={5} placeholder="Tell us what you think..." className="w-full p-3 border-2 border-ink/15 bg-transparent rounded-lg focus:outline-none focus:border-coral" />
          </div>
          <button type="submit" className="bg-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-coral-light border-none cursor-pointer">
            Send Message
          </button>
        </form>
      </div>

      <div className="flex-1 min-w-75 bg-charcoal-light p-9 rounded-xl shadow-sm text-white border border-transparent">
        <h2 className="text-coral mb-7.5 text-2xl border-b-2 border-white/20 pb-4">Contact Information</h2>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📍</span>
          <div>
            <h4 className="text-coral mb-2 text-lg">Visit Us</h4>
            <p className="text-white/90 m-0">123 Book Street<br />New York, NY 10001</p>
          </div>
        </div>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📧</span>
          <div>
            <h4 className="text-coral mb-2 text-lg">Email Us</h4>
            <p className="text-white/90 m-0">hello@bookhaven.com</p>
          </div>
        </div>
        <div className="flex gap-4 mb-7.5 items-start p-3 bg-white/10 rounded-lg transition-all hover:bg-white/20 hover:translate-x-1">
          <span className="text-3xl min-w-11.25">📞</span>
          <div>
            <h4 className="text-coral mb-2 text-lg">Call Us</h4>
            <p className="text-white/90 m-0">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;