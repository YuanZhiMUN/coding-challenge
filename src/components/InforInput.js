import React from 'react';

class InforInput extends React.Component {

    state = {
        inputAdd: "CEztKBAYNoUEEaPYbkyFeXC5v8Jz9RoZH9",
        outputAdd: "C1rGdt7QEPGiwPMFhNKNhHmyoWpa5X92pn",
        value: 100000
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        var newtx = { inputs: [{addresses: [`${this.state.inputAdd}`]}],
            outputs: [{addresses: [`${this.state.outputAdd}`], 
            value: 100000}]
          };
        this.props.onSubmit(newtx);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Address Input</label>
                        <input type="text" 
                            value={this.state.inputAdd} 
                            onChange={e => {this.setState({ inputAdd: e.target.value})}}
                        />
                        <label>Address Output</label>
                        <input type="text" 
                            value={this.state.outputAdd} 
                            onChange={e => {this.setState({ outputAdd: e.target.value})}}
                        />
                        <label>Value</label>
                        <input type="text" 
                            value={this.state.value} 
                            onChange={e => {this.setState({ value: e.target.value})}}
                        />
                    </div>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        );
    }
}

export default InforInput;
