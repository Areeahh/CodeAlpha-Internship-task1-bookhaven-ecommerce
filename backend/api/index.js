const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS so your frontend can call this route without cross-origin blocks
app.use(cors());
app.use(express.json());

// Your database connection logic goes here
// (e.g., connectToDatabase())

app.get('/api/books', async (req, res) => {
  try {
    // Fetch books from your database
    const books = [/* your book data or DB query */];
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

// IMPORTANT: Do NOT call app.listen(). Export the app instead.
module.exports = app;