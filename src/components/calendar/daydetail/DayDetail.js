import React from 'react';
import './DayDetail.css';

const renderHours = () => {
    //noinspection JSPotentiallyInvalidConstructorUsage
    return Array.from(Array(24))
        .map((e, hour) => <span key={hour} className="day-hour">
            <span className="time">{hour} - {hour + 1}</span>
        </span>);
};

const DayDetail = () => {
    return (
        <div className="daydetail">
            <h2>14.07.2018</h2>
            <ol className="hours">
                {renderHours()}
            </ol>
        </div>
    )
};

export default DayDetail;