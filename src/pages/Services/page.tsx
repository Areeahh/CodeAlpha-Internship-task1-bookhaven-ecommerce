import { Link } from 'react-router-dom';

const AUTHOR_PHOTO = 'https://images.stockcake.com/public/1/a/b/1ab3fe56-a638-4985-9524-f09665ec7e4c_large/author-at-work-stockcake.jpg';

const services = [
  { title: 'Curated Collections', description: 'Expert book selections for every mood.' },
  { title: 'Fast Delivery', description: 'Quick shipping across the United States.' },
  { title: 'Gift Wrapping', description: 'Perfect presentation for every gift.' },
  { title: 'Personal Recommendations', description: 'Custom reading suggestions.' }
];

const Services = () => (
  <div className="bg-cream">

    {/* Editorial hero — inspired by author-site layout */}
    <div className="relative overflow-hidden bg-linear-to-b from-coral via-blush to-cream pt-12 md:pt-16 pb-6">
      {/* Floating decorative objects */}
      <span className="hidden md:block absolute top-24 left-[8%] text-4xl float-a select-none">📖</span>
      <span className="hidden md:block absolute top-40 right-[12%] text-3xl float-b select-none">🌿</span>
      <span className="hidden md:block absolute bottom-16 left-[15%] text-3xl float-c select-none">✒️</span>
      <span className="hidden md:block absolute top-16 right-[25%] text-2xl float-b select-none">✨</span>

      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <h1 className="font-display italic text-cream text-4xl sm:text-5xl md:text-6xl leading-tight mb-10">
          Beyond words into<br />wonder ideas
        </h1>

        {/* Overlapping portrait frames */}
        <div className="relative w-full max-w-xs sm:max-w-sm mx-auto h-64 sm:h-80 mb-8">
          <img
            src={AUTHOR_PHOTO}
            alt="BookHaven curator at work"
            className="absolute left-0 top-4 w-40 sm:w-52 h-56 sm:h-72 object-cover rounded-xl shadow-2xl grayscale rotate-[-6deg]"
          />
          <img
            src={AUTHOR_PHOTO}
            alt="BookHaven curator portrait"
            className="absolute right-0 top-0 w-40 sm:w-52 h-56 sm:h-72 object-cover rounded-xl shadow-2xl rotate-[4deg]"
          />
        </div>

        <Link
          to="/shop"
          className="inline-block bg-cream text-ink px-8 py-3.5 rounded-full font-medium tracking-wide no-underline transition-all hover:bg-ink hover:text-cream"
        >
          See All Books
        </Link>
      </div>

      {/* Oversized editorial wordmark */}
      <div className="text-center pt-6 select-none pointer-events-none">
        <h2 className="font-display italic text-[16vw] md:text-[9rem] leading-none text-cream/20">
          BookHaven
        </h2>
      </div>
    </div>

    {/* Bio / curator section */}
    <div className="py-10 md:py-20 px-5 md:px-[8%] bg-cream">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <img
          src={AUTHOR_PHOTO}
          alt="Behind BookHaven"
          className="w-48 sm:w-64 rounded-2xl shadow-xl flex-shrink-0"
        />
        <div>
          <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-5">
            Behind every shelf, a reader
          </h2>
          <p className="text-ink/60 leading-relaxed mb-4">
            BookHaven is built by people who read to understand, to escape, to remember.
            Every collection is hand-picked, every recommendation genuinely felt — not algorithmic,
            just love for the written word passed on to you.
          </p>
          <p className="text-ink/60 leading-relaxed">
            From curated boxes to gift-wrapped first editions, our services exist for one reason:
            to make sure the right book finds the right reader.
          </p>
        </div>
      </div>
    </div>

    {/* Services grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 py-10 md:py-16 px-5 md:px-[8%] bg-white">
      {services.map((item) => (
        <div key={item.title} className="text-center p-8 bg-cream rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg border border-ink/5">
          <h3 className="font-display text-lg mb-2 text-ink">{item.title}</h3>
          <p className="text-ink/60 text-sm">{item.description}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="flex items-center gap-8 md:gap-16 py-10 md:py-20 px-5 md:px-[8%] bg-blush/40 flex-wrap">
      <div className="flex-1 min-w-70">
        <img src="/images/books1.jpeg" alt="Reading services" className="w-full rounded-2xl shadow-lg" />
      </div>
      <div className="flex-1 min-w-70">
        <h2 className="font-display italic text-3xl md:text-4xl text-ink mb-5">Why BookHaven Services?</h2>
        <p className="text-ink/60 leading-relaxed mb-6">
          We blend thoughtful book curation with modern convenience. Whether you want a surprise recommendation, express delivery, or a wrapped gift set, we make it easy.
        </p>
        <Link to="/contact" className="bg-ink text-cream px-6 py-3 rounded-full font-medium tracking-wide inline-block transition-all hover:bg-coral no-underline">
          Talk to Us →
        </Link>
      </div>
    </div>
  </div>
);

export default Services;
