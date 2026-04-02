import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
          <img src="/public/logo.jpeg" alt="" className='navbar-logo' style={{ width: "2.5rem", height: "2.5rem", borderRadius: "50%" }} />
          <a href="#" className="navbar-logo" onClick={closeMenu}>
            Cup Culture
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Toggle Button (Right Side, + to -) */}
        <button
          className={`mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <div className="icon-line horizontal"></div>
          <div className="icon-line vertical"></div>
        </button>

        {/* Mobile Flyout Menu */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li style={{ '--i': 1 }}><a href="#home" onClick={closeMenu}>Home</a></li>
              <li style={{ '--i': 2 }}><a href="#menu" onClick={closeMenu}>Menu</a></li>
              <li style={{ '--i': 3 }}><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
              <li style={{ '--i': 4 }}><a href="#footer" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>

        {/* Overlay */}
        <div className={`mobile-overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
};

export default Navbar;
