import React from 'react';
import Navigation from './navigation/Navigation';
import DayEntry from './day/DayEntry';
import * as utils from '../../../utils/calendarUtils';
import './CalendarMonth.css';

const CalendarMonth = (props) => {
    const month = parseInt(props.match.params.month, 10);
    const year = parseInt(props.match.params.year, 10);

    const dayEntries = createDayEntries(month, year);
    return (
        <div>
            <Navigation month={month} year={year}/>
            <div className="calendarmonth">
                {dayEntries}
            </div>
        </div>
    );
};

const createDayEntries = (month, year) => {
    let daysInCurrentMonth = utils.daysInMonth(month, year);
    const weekdayOffset = utils.getWeekdayOffsetForMonth(month, year);

    return Array.from(Array(daysInCurrentMonth + weekdayOffset))
        .map((e, i) => {
            if (i < weekdayOffset) {
                return fillerEntry(i);
            } else {
                return dayEntry(year, month, i, weekdayOffset);
            }
        });
};

const fillerEntry = function (i) {
    return <div key={i} className="day"/>;
};

const dayEntry = function (year, month, i, offset) {
    const date = new Date(year, month, i + 1 - offset);
    return <DayEntry key={i} date={date}/>
};

export default CalendarMonth;