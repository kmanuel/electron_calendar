import React from 'react';
import {Link} from 'react-router-dom';
import './DayDetail.css';

const renderHours = () => {
    //noinspection JSPotentiallyInvalidConstructorUsage
    return Array.from(Array(24))
        .map((e, hour) => <span key={hour} className="day-hour">
            <span className="time">{hour} - {hour + 1}</span>
        </span>);
};

const DayDetail = (props) => {
    const year = parseInt(props.match.params.year);
    const month = parseInt(props.match.params.month);
    const day = parseInt(props.match.params.day);

    const date = new Date(year, month, day);

    return (
        <div className="daydetail">
            <Link to={`/month/${year}/${month}`}>Back</Link>
            <h2>{date.toLocaleDateString()}</h2>
            <ol className="hours">
                {renderHours()}
            </ol>
        </div>
    )
};

export default DayDetail;