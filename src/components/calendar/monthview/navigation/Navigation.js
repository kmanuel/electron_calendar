import React from 'react';
import {Link} from 'react-router-dom';
import * as utils from '../../../../utils/calendarUtils';
import './Navigation.css';

const Navigation = (props) => {
    const year = props.year;
    const month = props.month;

    return (
        <div className="navigation">
            <span className="month-nav">
                <Link className="navigator" to={prevMonthLink(year, month)}>&larr;</Link>
                <span className="navigator-value">{utils.nameForMonth(month)}</span>
                <Link className="navigator" to={nextMonthLink(year, month)}>&rarr;</Link>
            </span>
            <span className="year-nav">
                <Link className="navigator" to={prevYear(year, month)}>&larr;</Link>
                <span className="navigator-value">{year}</span>
                <Link className="navigator" to={nextYear(year, month)}>&rarr;</Link>
            </span>
        </div>
    )
};

const prevYear = (year, month) => {
    return changeYear(year, month, -1);
};

const nextYear = (year, month) => {
    return changeYear(year, month, +1);
};

const changeYear = function (year, month, change) {
    const date = new Date();
    date.setYear(year + change);
    date.setMonth(month);
    return `/month/${date.getFullYear()}/${date.getMonth()}`;
};

const changeMonth = function (year, month, change) {
    const date = new Date();
    date.setYear(year);
    date.setMonth(month + change);
    return `/month/${date.getFullYear()}/${date.getMonth()}`;
};

const prevMonthLink = (year, month) => {
    return changeMonth(year, month, -1);
};

const nextMonthLink = (year, month) => {
    return changeMonth(year, month, +1);
};


export default Navigation;