import React from 'react';
import { MdAlarm } from 'react-icons/md';

const ReminderButton = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdAlarm size={30} />
            <span style={{ marginLeft: '8px' }}>Reminder</span>
        </div>
    );
};

export default ReminderButton;
