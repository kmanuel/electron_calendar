import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HourEntry.css';

class HourEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false,
        };

        this.renderAppointments = this.renderAppointments.bind(this);
    }

    toggleSelect() {
        this.setState((prevState) => {
            let prev = prevState.selected;
            if (!prev) {
                prev = false;
            }
            const newSelected = !prev;
            this.props.onSelect(this.props.hour, newSelected);
            return {
                selected: newSelected
            };

        });
    }

    renderAppointments() {
        const date = this.props.date;
        if (this.props.entries) {
            return this.props.entries.map(e => <Link to={`/appointment/${date.getFullYear()}/${date.getMonth()}/${date.getDate()}/${e.id}`} className="appointment-entry" style={{backgroundColor: e.color}}>{e.title}</Link>);
        }
    }

    render() {
        let { hour } = this.props;
        let selectedClass = this.state.selected ? 'selected' : '';
        return (
            <span className={`day-hour ${selectedClass}`} onClick={() => this.toggleSelect()}>
                <span className="time">{hour} - {hour + 1}</span>
                {this.renderAppointments()}
            </span>
        );
    }
}

export default HourEntry;
