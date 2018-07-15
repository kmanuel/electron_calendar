import React from 'react';
import {Link} from 'react-router-dom';
import HourEntry from './hourentry/HourEntry';
import './DayDetail.css';

const renderHours = () => {
    //noinspection JSPotentiallyInvalidConstructorUsage
    return Array.from(Array(24))
        .map((e, hour) => <HourEntry key={hour} hour={hour} />);
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