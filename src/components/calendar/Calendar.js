import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MonthView from './monthview/CalendarMonth';
import DayDetail from './dayview/DayDetail';

import './Calendar.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    render() {
        return (
            <div className="calendar">
                <Router>
                    <div>
                        <Route path="/month/:year/:month" component={MonthView}/>
                        <Route path="/day" component={DayDetail}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Calendar;