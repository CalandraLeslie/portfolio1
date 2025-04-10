import React from 'react';

function Products() {
  console.log('DEBUG: Products component rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgreen' }}>
      <h2>Our Products</h2>
      <ul>
        <li>Goat Cheese</li>
        <li>Goat Milk Soap</li>
        <li>Farm-Fresh Eggs</li>
      </ul>
    </div>
  );
}

export default Products;