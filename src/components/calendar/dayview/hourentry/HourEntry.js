import React, { Component } from 'react';
import './HourEntry.css';

class HourEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        };
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

    render() {
        let { hour } = this.props;
        let selectedClass = this.state.selected ? 'selected' : '';
        return (
            <span className={`day-hour ${selectedClass}`} onClick={() => this.toggleSelect()}>
                <span className="time">{hour} - {hour + 1}</span>
            </span>
        );
    }
}

export default HourEntry;
