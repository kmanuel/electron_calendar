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
            this.setState({
                selected: !prevState.selected
            });
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
