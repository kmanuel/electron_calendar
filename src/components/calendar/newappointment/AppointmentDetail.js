import React, {Component} from 'react';
import * as store from '../../../utils/entryStore';
import './AppointmentDetail.css';

const AppointmentDetail = (props) => {
    console.log('appointmentdetail props', props);
    const { year, month, day, id } = props.match.params;

    const appointment = store.fetchAppointment(year, month, day, id);
    if (appointment) {
        return <div className='appointment-detail'>
            <button onClick={() => props.history.goBack()}>Back</button>
            <span className='title'>{appointment.title}</span>
            <span className='description'>{appointment.description}</span>
        </div>;
    } else {
        return <div>No appointment for id {id}</div>
    }
};

export default AppointmentDetail;