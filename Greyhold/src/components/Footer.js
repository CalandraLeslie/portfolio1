import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-info">
          <div className="footer-logo">Greyhold Ranch</div>
          <p>Premium goat products from Las Cruces, New Mexico</p>
        </div>
        <div className="footer-social">
          <a href="#" className="social-icon" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon" aria-label="Twitter">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Greyhold Ranch. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;