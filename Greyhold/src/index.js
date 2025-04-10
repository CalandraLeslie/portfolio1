import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles/styles.css';  // Adjust if your CSS path is different

console.log('DEBUG: React script starting execution');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DEBUG: DOM fully loaded');
  
  const rootElement = document.getElementById('root');
  console.log('DEBUG: Root element found:', rootElement);

  if (rootElement) {
    try {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        rootElement
      );
      console.log('DEBUG: React rendering successful');
    } catch (error) {
      console.error('DEBUG: React render error:', error);
      rootElement.innerHTML = '<h1 style="color:red">React failed, but we caught the error</h1>';
    }
  } else {
    console.error('DEBUG: Root element not found!');
  }
});