import { Link } from 'react-router-dom';

const reviews = [
  { id: 1, name: 'Sarah Johnson', role: 'Avid Reader', content: 'BookHaven is my absolute favorite place to discover new stories. The curated collections are always spot-on, and the delivery is incredibly fast!', rating: 5, avatar: 'SJ' },
  { id: 2, name: 'Michael Chen', role: 'Book Club Host', content: 'I order all my book club selections from here. The prices are unbeatable, and the customer service is top-notch. Highly recommended for any book lover.', rating: 5, avatar: 'MC' },
  { id: 3, name: 'Emma Davis', role: 'Student', content: 'Finding classic literature for my courses has never been easier. The interface is beautiful, and I love the personalized recommendations.', rating: 4, avatar: 'ED' },
  { id: 4, name: 'James Wilson', role: 'Teacher', content: 'The selection of educational books is fantastic. I regularly purchase materials for my classroom and the quality is always pristine.', rating: 5, avatar: 'JW' },
  { id: 5, name: 'Olivia Martinez', role: 'Casual Reader', content: 'A truly premium experience! From the website design to the carefully packaged books, BookHaven knows how to make reading feel special.', rating: 5, avatar: 'OM' },
  { id: 6, name: 'William Taylor', role: 'Sci-Fi Enthusiast', content: 'Great collection of fantasy and sci-fi. I finally found some rare editions I had been searching for. The dark mode feature is a nice touch!', rating: 4, avatar: 'WT' }
];

const Reviews = () => (
  <div className="py-8 md:py-16 px-5 md:px-[8%] min-h-[80vh] transition-colors duration-300">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl text-ink mb-4">What Our Readers Say</h1>
      <p className="text-lg text-ink/50">Real stories from the BookHaven community</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-ink/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-coral flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                {review.avatar}
              </div>
              <div>
                <h3 className="font-semibold text-ink">{review.name}</h3>
                <p className="text-xs text-ink/50">{review.role}</p>
              </div>
            </div>
            <div className="flex gap-1 text-coral-light text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < review.rating ? '★' : '☆'}</span>
              ))}
            </div>
          </div>
          <p className="text-ink/70 leading-relaxed italic text-sm">"{review.content}"</p>
        </div>
      ))}
    </div>

    <div className="mt-20 text-center bg-orange-50 p-12 rounded-3xl max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl text-ink mb-4">Have a story to share?</h2>
      <p className="text-ink/70 mb-8 max-w-xl mx-auto">We'd love to hear about your experience with BookHaven. Your feedback helps us build a better sanctuary for book lovers.</p>
      <Link to="/contact" className="bg-coral text-white px-8 py-4 rounded-full font-semibold transition-all hover:bg-coral-light hover:shadow-lg inline-block">
        Write a Review
      </Link>
    </div>
  </div>
);

export default Reviews;
