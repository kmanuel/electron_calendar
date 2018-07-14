import React from 'react';
import DayEntry from './day/DayEntry';
import * as utils from '../../../utils/calendarUtils';
import './CalendarMonth.css';

const CalendarMonth = (props) => {
    const month = props.date.getMonth();
    const year = props.date.getFullYear();
    const dayEntries = createDayEntries(month, year);
    return (
        <div className="calendarmonth">
            {dayEntries}
        </div>
    );
};

const createDayEntries = (month, year) => {
    const today = new Date();
    const createNDayEntries = function (entryCount, offset = 0) {
        //noinspection UnreachableCodeJS,JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(entryCount + offset))
            .map((e, i) => {
                let isToday = false;
                if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === (i - offset + 1)) {
                    isToday = true;
                }
                return <DayEntry key={i + 1 - offset} day={i + 1 - offset} isToday={isToday}/>;
            });
    };

    let daysInCurrentMonth = utils.daysInMonth(month, year);
    const weekdayOffset = utils.getWeekdayOffsetForMonth(month, year);
    return createNDayEntries(daysInCurrentMonth, weekdayOffset);
};

export default CalendarMonth;