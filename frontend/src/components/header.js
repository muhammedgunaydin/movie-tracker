import React from 'react';
import '../styles/header.css';


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={require('../img/logo.png')} alt="Logo" className="logo" />
        <h1 className='lefthead'>MovieTracker</h1>
      </div>
      <div>
        <a className='login-button'  href='/signin'>Sign In</a>
      </div>
    </div>
  );
};

export default Header;

