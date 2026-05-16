import { useState, useEffect } from 'react';

const allBooks = [
  { id: 1, image: '/images/1984.jpeg', title: '1984', author: 'George Orwell', price: 12.99, category: 'Fiction' },
  { id: 2, image: '/images/alchemist.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', price: 14.99, category: 'Fiction' },
  { id: 3, image: '/images/mockingbird.jpeg', title: 'Mockingbird', author: 'Harper Lee', price: 11.99, category: 'Classics' },
  { id: 4, image: '/images/dune.jpeg', title: 'Dune', author: 'Frank Herbert', price: 15.99, category: 'Fantasy' },
  { id: 5, image: '/images/pride.jpeg', title: 'Pride & Prejudice', author: 'Jane Austen', price: 10.99, category: 'Classics' },
  { id: 6, image: '/images/thetrial.jpeg', title: 'The Trial', author: 'Franz Kafka', price: 13.99, category: 'Classics' },
  { id: 7, image: '/images/hamlet.jpeg', title: 'Hamlet', author: 'William Shakespeare', price: 9.99, category: 'Classics' },
  { id: 8, image: '/images/matilda.jpeg', title: 'Matilda', author: 'Roald Dahl', price: 11.99, category: 'Fiction' },
  { id: 9, image: '/images/belljar.jpeg', title: 'The Bell Jar', author: 'Sylvia Plath', price: 12.99, category: 'Fiction' },
  { id: 10, image: '/images/restless.jpeg', title: 'Restless', author: 'William Boyd', price: 13.99, category: 'Fiction' },
  { id: 11, image: '/images/tkiterunner.webp', title: 'The Kite Runner', author: 'Khaled Hosseini', price: 14.99, category: 'Fiction' },
  { id: 12, image: '/images/tbooktheif.jpeg', title: 'The Book Thief', author: 'Markus Zusak', price: 14.99, category: 'Fiction' }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [sortBy, setSortBy] = useState('default');
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  const getPriceRange = (range: string) => {
    switch(range) {
      case 'Under $10': return { min: 0, max: 9.99 };
      case '$10 - $13': return { min: 10, max: 12.99 };
      case '$13 - $15': return { min: 13, max: 14.99 };
      case 'Over $15': return { min: 15, max: 999 };
      default: return { min: null, max: null };
    }
  };

  useEffect(() => {
    let filtered = allBooks.filter((book) => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || book.category === selectedCategory;
      
      const { min, max } = getPriceRange(selectedPriceRange);
      const matchesPrice = min === null || (book.price >= min && book.price <= max);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortBy === 'price-low') {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'title-az') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredBooks(filtered);
  }, [searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  return (
    <div className="py-16 px-[8%] bg-gray-50 dark:bg-gray-900 min-h-[70vh] transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl text-gray-800 dark:text-white">Shop Books</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-transparent dark:border-gray-700 transition-colors">
        <input
          type="text"
          className="w-full md:flex-1 px-5 py-3 border-2 border-gray-200 dark:border-gray-700 bg-transparent dark:text-white rounded-full text-sm focus:outline-none focus:border-orange-500 dark:focus:border-orange-500 transition-colors"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-5 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm cursor-pointer hover:border-orange-500 dark:hover:border-orange-500 focus:outline-none focus:border-orange-500 transition-colors"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Classics</option>
          <option>Fantasy</option>
          <option>Mystery</option>
        </select>

        <select
          className="px-5 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm cursor-pointer hover:border-orange-500 dark:hover:border-orange-500 focus:outline-none focus:border-orange-500 transition-colors"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
        >
          <option>All Prices</option>
          <option>Under $10</option>
          <option>$10 - $13</option>
          <option>$13 - $15</option>
          <option>Over $15</option>
        </select>

        <select
          className="px-5 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm cursor-pointer hover:border-orange-500 dark:hover:border-orange-500 focus:outline-none focus:border-orange-500 transition-colors"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="title-az">Title: A to Z</option>
        </select>
      </div>

      <p className="my-4 text-gray-600 dark:text-gray-400 text-sm">Showing {filteredBooks.length} of {allBooks.length} books</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7.5">
        {filteredBooks.map((book) => (
          <div key={book.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 shadow-sm border border-transparent dark:border-gray-700 hover:-translate-y-1 hover:shadow-lg">
            <div className="h-72 overflow-hidden flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800/50">
              <img src={book.image} alt={book.title} className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105 shadow-md" />
            </div>
            <h3 className="text-lg px-4 pt-4 pb-1 text-gray-800 dark:text-white">{book.title}</h3>
            <p className="px-4 text-gray-500 dark:text-gray-400 text-sm">{book.author}</p>
            <span className="block px-4 py-2 text-xl font-bold text-orange-600">${book.price.toFixed(2)}</span>
            <button className="mx-4 mb-5 w-[calc(100%-2rem)] bg-orange-600 text-white px-4 py-2 rounded-full font-semibold border-none cursor-pointer text-sm transition-all hover:bg-orange-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <p className="text-center py-12 text-gray-500 dark:text-gray-400 text-lg">No books found. Try a different search.</p>
      )}
    </div>
  );
};

export default Shop;