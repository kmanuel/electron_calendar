import React, {Component} from 'react';
import HourEntry from './hourentry/HourEntry';
import * as entryStore from '../../../utils/entryStore';
import './DayDetail.css';

class DayDetail extends Component {

    constructor(props) {
        super(props);

        const year = parseInt(props.match.params.year);
        const month = parseInt(props.match.params.month);
        const day = parseInt(props.match.params.day);

        const date = new Date(year, month, day);

        console.log('entries for this day: ', entryStore.fetchEntries(year, month, day));

        this.state = {year, month, day, date, selectedHours: []};
    }

    renderHours = () => {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(24))
            .map((e, hour) => <HourEntry key={hour} hour={hour} onSelect={this.setSelected}/>);
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
        console.log(`selectedHours: ${selectedHours}`);
        console.log(`history: ${this.props.history}`);
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
        const {date} = this.state;
        return (
            <div className="daydetail">
                <button onClick={this.props.history.goBack}>Back</button>
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