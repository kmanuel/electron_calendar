import React from 'react';
import Navigation from './navigation/Navigation';
import DayEntry from './day/DayEntry';
import * as utils from '../../../utils/calendarUtils';
import './CalendarMonth.css';

const CalendarMonth = (props) => {
    const month = parseInt(props.match.params.month);
    const year = parseInt(props.match.params.year);

    this.state = {
        month,
        year
    };

    const dayEntries = createDayEntries(month, year);
    return (
        <div>
            <Navigation month={this.state.month} year={this.state.year} />
            <div className="calendarmonth">
                {dayEntries}
            </div>
        </div>
    );
};

const isToday = function (year, month, i, offset) {
    const today = new Date();
    return today.getFullYear() === year && today.getMonth() === month && today.getDate() === (i - offset + 1);
};

const fillerEntry = function (i) {
    return <div key={i} className="day"/>;
};

const dayEntry = function (year, month, i, offset) {
    let today = isToday(year, month, i, offset);
    return <DayEntry key={i} day={i + 1 - offset} year={year} month={month} today={today}/>
};

const createDayEntries = (month, year) => {
    const createNDayEntries = function (entryCount, offset = 0) {
        //noinspection UnreachableCodeJS,JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(entryCount + offset))
            .map((e, i) => {
                if (i < offset) {
                    return fillerEntry(i);
                } else {
                    return dayEntry(year, month, i, offset);
                }
            });
    };

    let daysInCurrentMonth = utils.daysInMonth(month, year);
    const weekdayOffset = utils.getWeekdayOffsetForMonth(month, year);

    return createNDayEntries(daysInCurrentMonth, weekdayOffset);
};

export default CalendarMonth;