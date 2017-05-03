import React, {Component} from 'react';

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
    }

    onInputChange(e) {
        this.setState({term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
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

export default SearchBar;