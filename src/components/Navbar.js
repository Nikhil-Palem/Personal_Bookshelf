import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Search</Link>
      <Link to="/bookshelf">My Bookshelf</Link>
    </nav>
  );
};

export default Navbar;
