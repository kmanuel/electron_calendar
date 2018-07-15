import React, {Component} from 'react';
import HourEntry from './hourentry/HourEntry';
import {Link} from 'react-router-dom';
import * as entryStore from '../../../utils/entryStore';
import './DayDetail.css';

class DayDetail extends Component {

    constructor(props) {
        super(props);

        const year = parseInt(props.match.params.year);
        const month = parseInt(props.match.params.month);
        const day = parseInt(props.match.params.day);

        const date = new Date(year, month, day);

        const calendarDayEntries = entryStore.fetchEntries(year, month, day);

        this.state = {year, month, day, date, selectedHours: [], calendarDayEntries};
    }

    renderHours = () => {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(24))
            .map((e, hour) => {
                const entries = this.state.calendarDayEntries;
                const entriesForThisHour = entries.filter(e => e.hours.indexOf('' + hour) != -1);
                console.log(entriesForThisHour);
                return <HourEntry key={hour} hour={hour} onSelect={this.setSelected} entries={entriesForThisHour} />
            });

    };

    setSelected = (hour, selected) => {
        const newState = {...this.state};
        if (selected) {
            newState.selectedHours.push(hour);
        } else {
            newState.selectedHours.splice(newState.selectedHours.indexOf(hour), 1);
        }
        this.setState(newState);
    };

    createCalendarEntry() {
        const selectedHours = this.state.selectedHours.join(',');
        this.props.history.push(`/create/${this.state.year}/${this.state.month}/${this.state.day}?hours=${selectedHours}`);
    }

    createButtonIfSelectedHours() {
        const selectedHours = this.state.selectedHours;

        const enabled = (selectedHours.length > 0);
        if (enabled) {
            return <button onClick={() => this.createCalendarEntry()}>Create</button>
        } else {
            return <button disabled>Create</button>
        }
    }

    render() {
        const {date, month, year} = this.state;
        return (
            <div className="daydetail">
                <Link to={`/month/${year}/${month}`}>Back</Link>
                <h2>{date.toLocaleDateString()}</h2>
                {this.createButtonIfSelectedHours()}
                <ol className="hours">
                    {this.renderHours()}
                </ol>
            </div>
        );
    }
}

export default DayDetail;