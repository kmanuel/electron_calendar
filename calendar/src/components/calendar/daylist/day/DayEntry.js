import React from 'react';
import './Day.css';

const DayEntry = (props) => {
    return (
        <div className={`day ${props.isToday ? 'active' : ''}`}>{props.day > 0 ? props.day : ''}</div>
    );
};

export default DayEntry;