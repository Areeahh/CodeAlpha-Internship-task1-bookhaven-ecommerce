// Populates the books table with the same data currently hardcoded in
// src/pages/Shop/page.tsx, so the frontend and backend line up exactly.
// Run: npm run seed

const pool = require('../config/db');

const books = [
  { title: '1984', author: 'George Orwell', price: 12.99, category: 'Fiction', image: '/images/1984.jpeg' },
  { title: 'The Alchemist', author: 'Paulo Coelho', price: 14.99, category: 'Fiction', image: '/images/alchemist.jpeg' },
  { title: 'Mockingbird', author: 'Harper Lee', price: 11.99, category: 'Classics', image: '/images/mockingbird.jpeg' },
  { title: 'Dune', author: 'Frank Herbert', price: 15.99, category: 'Fantasy', image: '/images/dune.jpeg' },
  { title: 'Pride & Prejudice', author: 'Jane Austen', price: 10.99, category: 'Classics', image: '/images/pride.jpeg' },
  { title: 'The Trial', author: 'Franz Kafka', price: 13.99, category: 'Classics', image: '/images/thetrial.jpeg' },
  { title: 'Hamlet', author: 'William Shakespeare', price: 9.99, category: 'Classics', image: '/images/hamlet.jpeg' },
  { title: 'Matilda', author: 'Roald Dahl', price: 11.99, category: 'Fiction', image: '/images/matilda.jpeg' },
  { title: 'The Bell Jar', author: 'Sylvia Plath', price: 12.99, category: 'Fiction', image: '/images/belljar.jpeg' },
  { title: 'Restless', author: 'William Boyd', price: 13.99, category: 'Fiction', image: '/images/restless.jpeg' },
  { title: 'The Kite Runner', author: 'Khaled Hosseini', price: 14.99, category: 'Fiction', image: '/images/tkiterunner.webp' },
  { title: 'The Book Thief', author: 'Markus Zusak', price: 14.99, category: 'Fiction', image: '/images/tbooktheif.jpeg' },
];

async function seed() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query('DELETE FROM books');

    for (const book of books) {
      await client.query(
        `INSERT INTO books (title, author, price, category, image)
         VALUES ($1, $2, $3, $4, $5)`,
        [book.title, book.author, book.price, book.category, book.image]
      );
    }

    await client.query('COMMIT');
    console.log(`Seeded ${books.length} books successfully.`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Seed failed:', err);
  } finally {
    client.release();
    pool.end();
  }
}

seed();
