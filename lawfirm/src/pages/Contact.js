import React from 'react';
import ContactForm from '../components/ContactForm';
import './Contact.css'; // This file doesn't exist in the right location

const Contact = () => {
    return (
        <div className="contact-page" style={{ backgroundColor: '#E6EDF2', padding: '20px' }}>
            <h1 style={{ color: '#002147' }}>Contact Us</h1>
            <p style={{ color: '#626262' }}>
                If you have any questions or would like to schedule a consultation, please fill out the form below or reach out to us directly.
            </p>
            <ContactForm />
        </div>
    );
};

export default Contact;