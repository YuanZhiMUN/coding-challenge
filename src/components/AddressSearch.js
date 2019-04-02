import React from 'react';

class AddressSearch extends React.Component {
    state = {term: ''};
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Balance Search</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={e => {this.setState({ term: e.target.value})}}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default AddressSearch;
