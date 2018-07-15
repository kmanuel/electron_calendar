import React, {Component} from 'react';
import * as entryStore from '../../../utils/entryStore';

class NewEntry extends Component {
    constructor(props) {
        super(props);
        const title = '';
        const description = '';
        const paramHours = this.props.history.location.search.split('?')[1];
        const hours = paramHours.split('=')[1].split(',');
        this.state = {title, description, hours};

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onTitleChange(event) {
        this.setState({title: event.target.value});
    }

    onSubmit(event) {
        event.preventDefault();

        const {day, month, year} = this.props.match.params;
        const {hours, title} = this.state;

        entryStore.storeEntry(year, month, day, hours, title);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>Title</label>
                <input type="text" onChange={this.onTitleChange} />
                <br/>
                <button>Save</button>
                <button onClick={this.props.history.goBack} type="button">Cancel</button>
            </form>
        );
    }
}

export default NewEntry;