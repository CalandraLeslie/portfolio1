import React from 'react';

function Home() {
  console.log('DEBUG: Home component rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightyellow' }}>
      <h2 style={{ color: 'darkorange' }}>Welcome to Greyhold Ranch</h2>
      <p>Explore our farm and discover our premium goat products!</p>
    </div>
  );
}

export default Home;