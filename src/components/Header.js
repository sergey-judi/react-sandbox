import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src={logo} alt="Logo" style={{ height: '50px' }} />
      <nav>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;
