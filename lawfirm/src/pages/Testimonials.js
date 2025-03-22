import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';
import '../styles/components/Testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials-page" style={{ backgroundColor: '#E6EDF2', padding: '20px' }}>
            <h1 style={{ color: '#002147' }}>Client Testimonials</h1>
            <TestimonialSlider />
        </div>
    );
};

export default Testimonials;