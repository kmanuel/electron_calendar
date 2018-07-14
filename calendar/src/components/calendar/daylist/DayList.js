import React from 'react';
import DayEntry from './day/DayEntry';
import * as utils from '../../../utils/calendarUtils';

const DayList = (props) => {
    const month = props.date.getMonth();
    const year = props.date.getYear();

    const dayEntries = createDayEntries(month, year);
    return (
        <div>
            {dayEntries}
        </div>
    );
};

const createDayEntries = (month, year) => {
    let daysInCurrentMonth = utils.daysInMonth(month, year);
    return createNDayEntries(daysInCurrentMonth);
};

const createNDayEntries = function (daysInCurrentMonth) {
    return Array.from(Array(daysInCurrentMonth))
        .map((e, i) => <DayEntry key={i + 1} day={i + 1}/>);
};


export default DayList;