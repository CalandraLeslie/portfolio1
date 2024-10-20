import React from 'react';
import { MdHealthAndSafety } from 'react-icons/md';

const HealthTrackerButton = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdHealthAndSafety size={30} />
            <span style={{ marginLeft: '8px' }}>Health Tracker</span>
        </div>
    );
};

export default HealthTrackerButton;
