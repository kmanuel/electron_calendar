import React from 'react';
import './Day.css';

const DayEntry = (props) => {
    return (
        <div className="day">{props.day}</div>
    );
};

export default DayEntry;