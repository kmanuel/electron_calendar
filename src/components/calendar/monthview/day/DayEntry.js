import React from 'react';
import {Link} from 'react-router-dom';
import './Day.css';

const DayEntry = (props) => {
    const month = parseInt(props.month, 10);
    const year = parseInt(props.year, 10);
    const day = parseInt(props.day, 10);

    const entries = props.entries;

    const showEntries = () => {
        if (!entries) {
            return;
        }
        return entries.map(e => <div>entry</div>);
    };

    if (props.day > 0) {
        return (
            <Link to={`/month/${year}/${month}/${day}`} className={`day ${props.today ? 'active' : ''}`}>
            <span className="daycontent">
                {props.day}
                {showEntries()}
            </span>
            </Link>
        );
    } else {
        return <div></div>;
    }
};

export default DayEntry;