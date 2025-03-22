import React from 'react';
import PracticeAreaCard from '../components/PracticeAreaCard';

const practiceAreas = [
    { title: 'Family Law', description: 'Divorce, custody, and family disputes.' },
    { title: 'Criminal Defense', description: 'Representation for criminal charges.' },
    { title: 'Personal Injury', description: 'Compensation for injuries and accidents.' },
    { title: 'Business Law', description: 'Legal support for businesses and startups.' },
    { title: 'Real Estate Law', description: 'Assistance with property transactions and disputes.' },
];

const PracticeAreas = () => {
    return (
        <div style={{ backgroundColor: '#E6EDF2', padding: '20px' }}>
            <h1 style={{ color: '#002147' }}>Practice Areas</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {practiceAreas.map((area, index) => (
                    <PracticeAreaCard key={index} title={area.title} description={area.description} />
                ))}
            </div>
        </div>
    );
};

export default PracticeAreas;