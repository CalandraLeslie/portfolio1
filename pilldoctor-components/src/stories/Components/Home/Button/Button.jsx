import React, { useState } from 'react';
import './Button.css';

const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const menuItems = [
    'Home',
    'Log In',
    'Register',
    'Profile',
    'Pill Tracker',
    'Health Tracker',
    'Reminder'
  ];

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    setIsOpen(false);
  };

  return (
    <div className="button-container">
      <button className="menu-button" onClick={toggleDropdown}>
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      {isOpen && (
        <div className="dropdown">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;