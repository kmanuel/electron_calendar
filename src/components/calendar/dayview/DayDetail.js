import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import HourEntry from './hourentry/HourEntry';
import './DayDetail.css';

class DayDetail extends Component {

    constructor(props) {
        super(props);

        const year = parseInt(props.match.params.year);
        const month = parseInt(props.match.params.month);
        const day = parseInt(props.match.params.day);

        const date = new Date(year, month, day);

        this.state = {year, month, day, date, selectedHours: []};
    }

    renderHours = () => {
        //noinspection JSPotentiallyInvalidConstructorUsage
        return Array.from(Array(24))
            .map((e, hour) => <HourEntry key={hour} hour={hour} onSelect={this.setSelected}/>);
    };

    setSelected = (hour, selected) => {
        const newState = {...this.state};
        newState.selectedHours[hour] = selected;
        this.setState(newState);
    };

    createButtonIfSelectedHours() {
        const selectedHours = this.state.selectedHours.filter(h => h);
        console.log(selectedHours);
    }

    render() {
        const {year, month, date} = this.state;
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