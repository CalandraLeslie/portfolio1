import React from 'react';
import './PracticeAreaCard.css';

const PracticeAreaCard = ({ title, description, icon }) => {
    return (
        <div className="practice-area-card">
            <div className="icon">{icon}</div>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
        </div>
    );
};

export default PracticeAreaCard;