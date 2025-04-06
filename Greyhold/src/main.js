// filepath: c:\Users\calan\OneDrive\Dokument\Skrivbord\goat\greygold-ranch\src\main.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/styles.css'; // Add this line to import the CSS

console.log('DEBUG: Starting React rendering');

const rootElement = document.getElementById('root');
console.log('DEBUG: Root element:', rootElement);

if (rootElement) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
  console.log('DEBUG: React rendering complete');
} else {
  console.error('DEBUG: Root element not found!');
}