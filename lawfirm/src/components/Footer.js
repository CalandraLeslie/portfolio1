import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Law Firm Name. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/about">About Us</a>
                    <a href="/practice-areas">Practice Areas</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;