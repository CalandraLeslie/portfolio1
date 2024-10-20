import React from 'react';
import { MdCalendarToday } from 'react-icons/md';

const CalendarButton = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdCalendarToday size={30} />
            <span style={{ marginLeft: '8px' }}>Calendar</span>
        </div>
    );
};

export default CalendarButton;
