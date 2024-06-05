import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './Bookcard';
import './Search.css'

const Search = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    setBooks(response.data.docs);
    setQuery("")
  };

  return (
    <div>
      <form onSubmit={searchBooks} className="search-form">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for books" />
        <button type="submit">Search</button>
      </form>
      <div className="book-results">
        {books.map((book, index) => (
          <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default Search;
