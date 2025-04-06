import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Greyhold Ranch</span>
          <div className="logo-accent"></div>
        </div>
        
        <div className={`navbar-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li onClick={() => handleScroll('home')}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </li>
          <li onClick={() => handleScroll('about')}>
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </li>
          <li onClick={() => handleScroll('products')}>
            <i className="fas fa-store"></i>
            <span>Products</span>
          </li>
          <li onClick={() => handleScroll('contact')}>
            <i className="fas fa-envelope"></i>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;