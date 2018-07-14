import React, {Component} from 'react';
import Navigation from './navigation/Navigation';
import DayList from './daylist/CalendarMonth';

import './Calendar.css';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    prevMonth = () => {
        this.changeMonthBy(-1);
    };

    nextMonth = () => {
        this.changeMonthBy(+1);
    };

    prevYear = () => {
        this.changeYearBy(-1);
    };

    nextYear = () => {
        this.changeYearBy(+1);
    };

    changeMonthBy = (value) => {
        this.setState((prevState) => {
            const newDate = new Date(prevState.date.getTime());
            newDate.setMonth(newDate.getMonth() + value);
            return {
                date: newDate
            }
        });
    };

    changeYearBy = (value) => {
        this.setState((prevState) => {
            const newDate = new Date(prevState.date.getTime());
            newDate.setYear(newDate.getFullYear() + value);
            return {
                date: newDate
            }
        });
    };

    render() {
        return (
            <div className="calendar">
                <Navigation
                    date={this.state.date}
                    nextMonth={this.nextMonth} prevMonth={this.prevMonth}
                    nextYear={this.nextYear} prevYear={this.prevYear} />
                <DayList date={this.state.date} />
            </div>
        );
    }
}

export default Calendar;