import React, { useState } from 'react';

function Products() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Artisanal Goat Cheese",
      shortDesc: "Award-winning cheese crafted from 100% goat milk using traditional methods.",
      description: "Our signature cheese is made from the milk of our pasture-raised Alpine and Nubian goats. Each batch is carefully cultured, aged, and monitored to develop its unique flavor profile. Available in several varieties including fresh chèvre, feta, and aged tomme.",
      ingredients: "Pasteurized goat milk, cultures, vegetable rennet, salt",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "fa-cheese",
      benefits: ["Rich in protein", "Easier to digest than cow's milk cheese", "Good source of calcium"]
    },
    {
      id: 2,
      name: "Handcrafted Goat Milk Soap",
      shortDesc: "Luxurious soap made with fresh goat milk, essential oils, and botanical ingredients.",
      description: "Our goat milk soap is gentle on the skin and naturally moisturizing. Each bar is handcrafted in small batches using milk from our own goats, combined with premium plant oils and natural fragrances. Free from harsh chemicals and artificial ingredients.",
      ingredients: "Fresh goat milk, olive oil, coconut oil, shea butter, essential oils, natural colorants",
      image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "fa-pump-soap",
      benefits: ["Natural moisturizer", "Suitable for sensitive skin", "Biodegradable and eco-friendly"]
    },
    {
      id: 3,
      name: "Farm-Fresh Eggs",
      shortDesc: "Nutrient-rich eggs from our free-range chickens with vibrant orange yolks.",
      description: "Our chickens are raised in a free-range environment, with access to fresh pasture and a natural diet supplemented with organic feed. This results in eggs with superior flavor, texture, and nutritional value, featuring rich, orange yolks and firm whites.",
      ingredients: "100% natural chicken eggs",
      image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: "fa-egg",
      benefits: ["Higher in omega-3 fatty acids", "Rich in vitamins A, D, and E", "Collected daily for maximum freshness"]
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title fade-in">Our Premium Products</h2>
        <div className="product-list">
          {products.map(product => (
            <div 
              key={product.id} 
              className={`product-card scale-up ${activeProduct === product.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveProduct(product.id)}
              onMouseLeave={() => setActiveProduct(null)}
            >
              <div className="product-icon">
                <i className={`fas ${product.icon}`}></i>
              </div>
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.shortDesc}</p>
              <button className="product-link" onClick={() => openModal(product)}>
                Learn more <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <div className="product-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-header">
              <h3>{selectedProduct.name}</h3>
              <div className="modal-icon">
                <i className={`fas ${selectedProduct.icon}`}></i>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>
              <div className="modal-details">
                <p className="modal-description">{selectedProduct.description}</p>
                <div className="modal-ingredients">
                  <h4>Ingredients</h4>
                  <p>{selectedProduct.ingredients}</p>
                </div>
                <div className="modal-benefits">
                  <h4>Benefits</h4>
                  <ul>
                    {selectedProduct.benefits.map((benefit, index) => (
                      <li key={index}><i className="fas fa-check"></i> {benefit}</li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className="modal-cta" onClick={closeModal}>
                  Contact us about this product
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;