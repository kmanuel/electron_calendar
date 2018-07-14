import React from 'react';
import * as utils from '../../../utils/calendarUtils';
import './Navigation.css';

const Navigation = (props) => {
    const year = props.date.getFullYear();
    const month = props.date.getMonth();
    return (
        <div className="navigation">
            <span className="month-nav">
                <span className="navigator" onClick={() => props.prevMonth()}>&larr;</span>
                <span className="navigator-value">{utils.nameForMonth(month + 1)}</span>
                <span className="navigator" onClick={() => props.nextMonth()}>&rarr;</span>
            </span>
            <span className="year-nav">
                <span className="navigator" onClick={() => props.prevYear()}>&larr;</span>
                <span className="navigator-value">{year}</span>
                <span className="navigator" onClick={() => props.nextYear()}>&rarr;</span>
            </span>
        </div>
    )
};

export default Navigation;