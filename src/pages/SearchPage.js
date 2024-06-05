import React from 'react';
import Search from '../components/Search';

const SearchPage = ({ addToBookshelf }) => {
  return (
    <div>
      <Search addToBookshelf={addToBookshelf} />
    </div>
  );
};

export default SearchPage;
