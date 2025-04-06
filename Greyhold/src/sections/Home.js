import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollY * 0.002);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="hero-content fade-in">
        <h1 className="slide-in">Greyhold Ranch</h1>
        <p className="slide-in">Artisanal goat products from the heart of Las Cruces, New Mexico</p>
        <div className="hero-buttons">
          <button className="cta-button primary-cta pulse" onClick={() => handleScroll('products')}>
            Our Products
          </button>
          <button className="cta-button secondary-cta" onClick={() => handleScroll('contact')}>
            Contact Us
          </button>
        </div>
      </div>
      <div className="scroll-indicator" onClick={() => handleScroll('about')}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Home;