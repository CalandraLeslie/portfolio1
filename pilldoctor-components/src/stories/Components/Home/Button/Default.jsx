// Home/Button/Default.jsx
import React, { useState } from 'react';
import Button from './Button';
import './Button.css';

const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    console.log(`${option} clicked`);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4">
      <div className="relative inline-block text-left">
        <div>
          <Button
            label="Menu"
            onClick={toggleDropdown}
            className="w-full justify-center"
          />
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <button
                onClick={() => handleOptionClick('Login')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Login
              </button>
              <button
                onClick={() => handleOptionClick('Register')}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Default;