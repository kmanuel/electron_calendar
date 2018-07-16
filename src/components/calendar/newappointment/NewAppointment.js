import React, {Component} from 'react';
import * as entryStore from '../../../utils/entryStore';
import './NewAppointment.css';


class NewAppointment extends Component {
    constructor(props) {
        super(props);
        const title = '';
        const description = '';
        const paramHours = this.props.history.location.search.split('?')[1];
        const hours = paramHours.split('=')[1].split(',');
        this.state = {title, description, hours};

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onDescriptionChange(event) {
        this.setState({description: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const {day, month, year} = this.props.match.params;
        const {hours, title, description} = this.state;

        entryStore.storeEntry(year, month, day, hours, title, description);

        this.props.history.goBack();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} class="appointment-form">
                <label>Title</label>
                <input type="text" onChange={this.onTitleChange} />
                <br/>
                <label>Description</label>
                <textarea cols="30" rows="10" onChange={this.onDescriptionChange} />
                <button className="btn btn-success">Save</button>
                <button className="btn btn-danger" onClick={this.props.history.goBack} type="button">Cancel</button>
            </form>
        );
    }
}

export default NewAppointment;