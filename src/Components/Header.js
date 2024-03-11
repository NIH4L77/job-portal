import React from 'react';
import { Link } from 'react-router-dom';
import "./Style/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          {/* Replace with your logo image or text */}
           job-portal
        </Link>

        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Login/Signup (optional) */}
        <div className="auth">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
