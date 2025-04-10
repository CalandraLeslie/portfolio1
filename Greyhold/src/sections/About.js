import React from 'react';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title fade-in">Our Story</h2>
        <div className="about-content">
          <div className="about-text slide-in">
            <p>Founded in 2010, Greyhold Ranch is a family-owned farm nestled in the beautiful landscape of Las Cruces, New Mexico. Our commitment to sustainable farming practices and animal welfare ensures that all our products meet the highest standards of quality.</p>
            <p>Our happy goats roam freely on 15 acres of lush pasture, producing the rich milk that becomes our signature cheeses and luxurious soaps. We also raise free-range chickens that provide farm-fresh eggs daily.</p>
            <p>Every product from Greyhold Ranch is handcrafted with care, continuing traditions passed down through generations while embracing modern, sustainable practices.</p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Acres</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Happy Goats</span>
              </div>
              <div className="stat">
                <span className="stat-number">12</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className="about-image-container scale-up">
            <img src="https://images.unsplash.com/photo-1533318087102-b3ad366ed041?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Happy Goat at Greyhold Ranch" className="about-image" />
            <div className="image-caption">One of our happy Alpine goats enjoying the New Mexico sunshine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;