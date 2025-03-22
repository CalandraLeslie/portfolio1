import React from 'react';
import './AttorneyCard.css';

const AttorneyCard = ({ name, title, photo }) => {
    return (
        <div className="attorney-card">
            <img src={photo} alt={`${name}`} className="attorney-photo" />
            <h3 className="attorney-name">{name}</h3>
            <p className="attorney-title">{title}</p>
        </div>
    );
};

export default AttorneyCard;