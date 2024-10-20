import React from 'react';
import { FaPrescriptionBottle } from 'react-icons/fa';
import './PrescriptionList.css'; 

const PrescriptionList = () => {
    const prescriptions = [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Curabitur vel arcu felis"
    ];

    return (
        <div>
            {prescriptions.map((prescription, index) => (
                <div className="prescription" key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <FaPrescriptionBottle size={20} />
                        <p style={{ marginLeft: '8px' }}>{prescription}</p>
                    </div>
                    <span style={{ cursor: 'pointer', color: 'blue' }}>View</span>
                </div>
            ))}
        </div>
    );
};

export default PrescriptionList;
