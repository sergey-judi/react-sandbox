import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../style/Header.css';

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="Logo" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/divs">Divs</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
