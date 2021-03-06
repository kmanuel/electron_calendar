import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Index from './Index';
import MonthView from './monthview/CalendarMonth';
import DayDetail from './dayview/DayDetail';
import NewEntry from './newappointment/NewAppointment';
import AppointmentDetail from './appointmentdetail/AppointmentDetail';

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
                        <Route exact path="/" component={Index} />
                        <Route path="/create/:year/:month/:day" component={NewEntry} />
                        <Route exact path="/month/:year/:month/:day/" component={DayDetail} />
                        <Route exact path="/month/:year/:month/" component={MonthView} />
                        <Route path="/appointment/:year/:month/:day/:id" component={AppointmentDetail} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default Calendar;