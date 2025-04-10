import React from 'react';
import ReactDOM from 'react-dom';

// Bare minimum React code with error catching
console.log('DEBUG: React script starting execution');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DEBUG: DOM fully loaded');
  
  const rootElement = document.getElementById('root');
  console.log('DEBUG: Root element found:', rootElement);

  if (rootElement) {
    try {
      // Try React rendering with basic content
      ReactDOM.render(
        <h1>React is now working!</h1>,
        rootElement
      );
      console.log('DEBUG: React rendering successful');
    } catch (error) {
      console.error('DEBUG: React render error:', error);
      // Add fallback rendering
      rootElement.innerHTML = '<h1 style="color:red">React failed, but we caught the error</h1>';
    }
  } else {
    console.error('DEBUG: Root element not found!');
  }
});

entry: './src/main.js';