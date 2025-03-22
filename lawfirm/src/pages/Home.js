import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestimonialSlider from '../components/TestimonialSlider';
import PracticeAreaCard from '../components/PracticeAreaCard';
import AttorneyCard from '../components/AttorneyCard';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div style={{ backgroundColor: '#E6EDF2', padding: '20px' }}>
            <Header />
            <main>
                <section>
                    <h1 style={{ color: '#002147' }}>Welcome to Our Law Firm</h1>
                    <p style={{ color: '#626262' }}>
                        We are dedicated to providing exceptional legal services to our clients.
                    </p>
                </section>
                <section>
                    <h2 style={{ color: '#002147' }}>Our Practice Areas</h2>
                    <div className="practice-area-cards">
                        <PracticeAreaCard />
                        <PracticeAreaCard />
                        <PracticeAreaCard />
                    </div>
                </section>
                <section>
                    <h2 style={{ color: '#002147' }}>Meet Our Attorneys</h2>
                    <div className="attorney-cards">
                        <AttorneyCard />
                        <AttorneyCard />
                        <AttorneyCard />
                    </div>
                </section>
                <section>
                    <h2 style={{ color: '#002147' }}>Client Testimonials</h2>
                    <TestimonialSlider />
                </section>
                <section>
                    <h2 style={{ color: '#002147' }}>Contact Us</h2>
                    <ContactForm />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;