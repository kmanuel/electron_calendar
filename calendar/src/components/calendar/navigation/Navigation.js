import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    return (
        <div className="navigation">
            <span onClick={() => props.prevMonth()}>&larr;</span>
            <span>{month + 1}</span>
            <span onClick={() => props.nextMonth()}>&rarr;</span>
            <span>{year}</span>
        </div>
    )
};

export default Navigation;