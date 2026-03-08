import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-mark">
            <span className="logo-text">OTT</span>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#content" className="nav-link">Content</a>
          <a href="#download" className="nav-link">Download</a>
          <a href="#about" className="nav-link">About</a>
        </div>

        {/* CTA Button */}
        <a 
          href="https://your-ott-link.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button"
        >
          Watch Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
