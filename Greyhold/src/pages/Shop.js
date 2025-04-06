import React from 'react';

function Shop() {
  return (
    <div className="shop-container">
      <h1 className="page-title slide-in">Shop Our Products</h1>
      
      <section className="shop-info fade-in">
        <h2>How to Purchase</h2>
        <p>Our products are available through several channels:</p>
        <ul className="purchase-options">
          <li>Visit our farm stand (open Saturday 9am-2pm)</li>
          <li>Local Farmers Market (Sundays 10am-3pm)</li>
          <li>Order online for local pickup or delivery</li>
        </ul>
      </section>
      
      <section className="online-order fade-in">
        <h2>Online Ordering</h2>
        <p>To place an online order, please fill out our order form below or contact us directly:</p>
        <form className="order-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="What would you like to order?" required></textarea>
          <button type="submit" className="submit-btn">Submit Order Request</button>
        </form>
      </section>
      
      <section className="delivery-info fade-in">
        <h2>Delivery Information</h2>
        <p>We offer free delivery for orders over $50 within a 20-mile radius of our farm.</p>
        <p>For smaller orders or locations outside our delivery zone, a shipping fee may apply.</p>
      </section>
    </div>
  );
}

export default Shop;