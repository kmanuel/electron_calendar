import React from 'react';
import DayEntry from './day/DayEntry';
import * as utils from '../../../utils/calendarUtils';
import './DayList.css';

const DayList = (props) => {
    const month = props.date.getMonth();
    const year = props.date.getYear();
    const dayEntries = createDayEntries(month, year);
    return (
        <div className="daylist">
            {dayEntries}
        </div>
    );
};

const createDayEntries = (month, year) => {
    let daysInCurrentMonth = utils.daysInMonth(month, year);
    const weekdayOffset = utils.getWeekdayOffsetForMonth(month, year);
    return createNDayEntries(daysInCurrentMonth, weekdayOffset);
};

const createNDayEntries = function (entryCount, offset = 0) {
    return Array.from(Array(entryCount))
        .map((e, i) => {
            return <DayEntry key={i + 1 - offset} day={i + 1 - offset}/>;
        });
};

export default DayList;