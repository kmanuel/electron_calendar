import React from 'react';
import {Link} from 'react-router-dom';
import './Day.css';

const isToday = function (year, month, day) {
    const today = new Date();

    return today.getFullYear() === year
        && today.getMonth() === month
        && today.getDate() === day;
};


const DayEntry = (props) => {
    const month = props.date.getMonth();
    const year = props.date.getFullYear();
    const day = props.date.getDate();
    const today = isToday(year, month, day);

    return (
        <Link
            to={`/month/${year}/${month}/${day}`}
            className={`day ${today ? 'active' : ''}`}>
            <span className="daycontent">{day}</span>
        </Link>
    );

};

export default DayEntry;