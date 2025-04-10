import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title fade-in">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info slide-in">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-map-marker-alt"></i> 1234 Ranch Road, Las Cruces, NM 88001</p>
            <p><i className="fas fa-envelope"></i> info@greyholdranch.com</p>
            <p><i className="fas fa-phone"></i> (555) 123-4567</p>
            <div className="hours">
              <h4><i className="far fa-clock"></i> Farm Store Hours</h4>
              <p>Monday - Friday: 9am - 5pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
            <div className="farm-tours">
              <h4><i className="fas fa-hiking"></i> Farm Tours</h4>
              <p>Available by appointment. Contact us to book your visit!</p>
            </div>
          </div>
          <form className="contact-form scale-up" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select id="subject" name="subject">
                <option value="general">General Inquiry</option>
                <option value="products">Product Information</option>
                <option value="tour">Book a Tour</option>
                <option value="wholesale">Wholesale Information</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;