import React from 'react';
import {Link} from 'react-router-dom';
import './Day.css';

const DayEntry = (props) => {
    const month = parseInt(props.month);
    const year = parseInt(props.year);
    const day = parseInt(props.day);

    return (
        <Link to={`/month/${year}/${month}/${day}`} className={`day ${props.today ? 'active' : ''}`}>{props.day > 0 ? props.day : ''}</Link>
    );
};

export default DayEntry;