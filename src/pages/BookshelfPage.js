import React from 'react';
import Bookshelf from '../components/Bookshelf';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div>
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
