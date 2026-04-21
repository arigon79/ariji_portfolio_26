import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          ariji
        </Link>
        <button 
          className="hamburger" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/resume" className="navbar-link" onClick={() => setIsOpen(false)}>
            resume
          </Link>
          <Link to="/projects" className="navbar-link" onClick={() => setIsOpen(false)}>
            projects
          </Link>
          <Link to="/blogs" className="navbar-link" onClick={() => setIsOpen(false)}>
            writing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
