import React from 'react';

function Contact() {
  console.log('DEBUG: Contact component rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightpink' }}>
      <h2>Contact Us</h2>
      <p>Email: info@greyholdranch.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>
  );
}

export default Contact;