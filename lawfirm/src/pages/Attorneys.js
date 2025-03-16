import React from 'react';
import AttorneyCard from '../components/AttorneyCard';
import './Attorneys.css';

const attorneysData = [
    {
        id: 1,
        name: 'John Doe',
        title: 'Senior Partner',
        photo: 'path/to/john_doe_photo.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Associate Attorney',
        photo: 'path/to/jane_smith_photo.jpg',
    },
    {
        id: 3,
        name: 'Emily Johnson',
        title: 'Junior Associate',
        photo: 'path/to/emily_johnson_photo.jpg',
    },
];

const Attorneys = () => {
    return (
        <div className="attorneys-page" style={{ backgroundColor: '#E6EDF2', padding: '20px' }}>
            <h1 style={{ color: '#002147' }}>Our Attorneys</h1>
            <div className="attorney-list">
                {attorneysData.map(attorney => (
                    <AttorneyCard key={attorney.id} name={attorney.name} title={attorney.title} photo={attorney.photo} />
                ))}
            </div>
        </div>
    );
};

export default Attorneys;