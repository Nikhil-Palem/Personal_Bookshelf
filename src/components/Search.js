import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './Bookcard';
import './Search.css'

const Search = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
const [Error, setError] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    
    if(response.data.docs.length===0){
      setError("no book's found... please retry");
    }else{
      setBooks(response.data.docs);
      setError("");
    }
    setQuery("")
  };

  return (
    <div>
      <form onSubmit={searchBooks} className="search-form">
        <label htmlFor="Bookname">Bookname   </label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for books" />
        <button type="submit">Search</button>
      </form>

      {Error&&<p style={{color:"red",fontSize:"13px",fontWeight:"bold",textAlign:"center"}}>{Error}</p> }

      <div className="book-results">
        {books.map((book, index) => (
          <BookCard key={index} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default Search;
