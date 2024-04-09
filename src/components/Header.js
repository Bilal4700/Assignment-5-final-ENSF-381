// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '10px' }}>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" style={{width:200}}/>
        </div>
        <div className="company-name">Company Name</div>
      </div>
      <nav>
        <ul style={{ display: 'flex', width: '100%', justifyContent: 'space-between', listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '0 10px' }}><Link to="/">Home</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/products">Products</Link></li>
          <li style={{ margin: '0 10px' }}><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
