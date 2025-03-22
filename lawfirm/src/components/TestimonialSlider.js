import React from 'react';
import './TestimonialSlider.css';

const testimonials = [
    {
        id: 1,
        text: "The team at this law firm was incredibly professional and helped me through a difficult time.",
        author: "John Doe"
    },
    {
        id: 2,
        text: "I received excellent legal advice and support. Highly recommend!",
        author: "Jane Smith"
    },
    {
        id: 3,
        text: "Their expertise made all the difference in my case. Thank you!",
        author: "Michael Johnson"
    }
];

const TestimonialSlider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonial-slider" style={{ backgroundColor: '#E6EDF2', color: '#002147' }}>
            <button onClick={prevTestimonial} className="slider-button">Previous</button>
            <div className="testimonial">
                <p>"{testimonials[currentIndex].text}"</p>
                <h4>- {testimonials[currentIndex].author}</h4>
            </div>
            <button onClick={nextTestimonial} className="slider-button">Next</button>
        </div>
    );
};

export default TestimonialSlider;