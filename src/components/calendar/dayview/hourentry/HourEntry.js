import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './HourEntry.css';

class HourEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
        };

        this.renderAppointments = this.renderAppointments.bind(this);
        this.toAppointmentEntry = this.toAppointmentEntry.bind(this);
    }

    toggleSelect() {
        this.setState((prevState) => {
            const newSelected = !prevState.selected;
            this.props.onSelect(this.props.hour, newSelected);
            return {
                selected: newSelected
            };

        });
    }

    renderAppointments() {
        if (this.props.entries) {
            return this.props.entries.map(this.toAppointmentEntry);
        }
    }

    toAppointmentEntry(entry) {
        const date = this.props.date;
        const entryLink = `/appointment/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}/${entry.id}`;
        return (
            <Link
                key={entry.id}
                to={entryLink}
                className="appointment-entry"
                style={{backgroundColor: entry.color}}>
                {entry.title}
            </Link>
        );
    }

    toDisplayHour(hour) {
        const from = this.padWithZeroIfSingleDigit(hour);
        const to = this.padWithZeroIfSingleDigit(hour + 1);
        return `${from} - ${to}`;
    }

    padWithZeroIfSingleDigit(hour) {
        let isSingleDigit = hour < 10;
        if (isSingleDigit) {
            return '0' + hour;
        } else {
            return hour;
        }
    };

    render() {
        let {hour} = this.props;
        let selectedClass = this.state.selected ? 'selected' : '';
        return (
            <span className={`hourentry day-hour ${selectedClass}`} onClick={() => this.toggleSelect()}>
                <span className="time">{this.toDisplayHour(hour)}</span>
                <span className="appointments">
                    {this.renderAppointments()}
                </span>
            </span>
        );
    }
}

export default HourEntry;
