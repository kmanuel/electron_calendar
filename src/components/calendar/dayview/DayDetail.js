import React, {Component} from 'react';
import HourEntry from './hourentry/HourEntry';
import * as entryStore from '../../../utils/entryStore';
import './DayDetail.css';

class DayDetail extends Component {

    constructor(props) {
        super(props);

        const year = parseInt(props.match.params.year, 10);
        const month = parseInt(props.match.params.month, 10);
        const day = parseInt(props.match.params.day, 10);

        const date = new Date(year, month, day);

        const calendarDayEntries =
            entryStore
                .fetchEntries(year, month, day)
                .map(this.toEntryWithRandomColor);

        this.state = {date, calendarDayEntries, selectedHours: []};
    }

    toEntryWithRandomColor = (entry) => {
        return {
            ...entry,
            color: this.createRandomColor()
        }
    };

    renderHours = (date) => {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(24))
            .map((e, hour) => {
                const entries = this.state.calendarDayEntries;
                const entriesForThisHour = entries.filter(e => e.hours.indexOf('' + hour) !== -1);
                return (
                    <HourEntry
                        key={hour}
                        date={date}
                        hour={hour}
                        entries={entriesForThisHour}
                        onSelect={this.setSelected}/>
                );
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
        this.props.history.push(`/create/${this.state.date.getFullYear()}/${this.state.date.getMonth()}/${this.state.date.getDate()}?hours=${selectedHours}`);
    }

    createButtonIfSelectedHours() {
        const selectedHours = this.state.selectedHours;
        const hoursSelected = (selectedHours.length > 0);

        if (hoursSelected) {
            return this.createButton();
        }
    }

    createButton() {
        return (
            <button
                className="btn btn-success createbutton"
                onClick={() => this.createCalendarEntry()}>
                Create
            </button>
        );
    }

    createRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        const {date} = this.state;
        return (
            <div className="daydetail">
                <span className="navigation">
                    <span className="navigation-back">
                        <button className="btn" onClick={() => this.props.history.goBack()}>Back</button>
                    </span>
                    <span className="navigation-main">
                        <h2>{date.toLocaleDateString()}</h2>
                    </span>
                </span>
                <ol className="hours">
                    {this.renderHours(date)}
                </ol>
                {this.createButtonIfSelectedHours()}
            </div>
        );
    }
}

export default DayDetail;