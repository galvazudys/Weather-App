import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

//search bar container
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this
            .onInputChange
            .bind(this);

        this.onFormSubmit = this
            .onFormSubmit
            .bind(this);
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this
            .props
            .fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        className="form-control"
                        placeholder="Get a five-day forecast in your favorite cities"
                        value={this.state.term}
                        onChange={this.onInputChange}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">
                            Submit
                        </button>
                    </span>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchWeather
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);