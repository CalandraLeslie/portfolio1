import React from 'react';

function About() {
  console.log('DEBUG: About component rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h2>About Greyhold Ranch</h2>
      <p>Greyhold Ranch is dedicated to sustainable farming and high-quality goat products.</p>
    </div>
  );
}

export default About;