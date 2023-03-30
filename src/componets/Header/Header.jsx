import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <>
      <nav className="header container">
      <h2>Knowledge Hunt</h2>
      <div className='nav-link'>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      </div>
    </nav>
 
        </>
    );
};

export default Header;