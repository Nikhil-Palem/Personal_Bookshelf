import React from 'react';
import './Bookshlef.css'
const Bookshelf = ({ bookshelf }) => {
  return (
    <div className="bookshelf">
      {bookshelf.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>{book.author_name?.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
