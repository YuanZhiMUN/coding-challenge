import React from 'react';
import AddressSearch from './AddressSearch';
import InforInput from './InforInput';

class App extends React.Component {
    state = {balance: ''};

    onSearchSubmit = (term) => {
     fetch(`http://localhost:9000/balancesearch?address=${term}`)
     .then(res => res.json())
     .then(res=> this.setState({ balance: res.balance}))
     .catch(err => console.log(err));
    }

    onTransactionSubmit = (inputAdd, outputAdd, value) => {
        fetch(`http://localhost:9000/transaction?inputAdd=${inputAdd}&outputAdd=${outputAdd}&value=${value}`)
        .then(res => res.json())
        .then(res=> console.log(res))
        .catch(err => console.log(err));
    }   

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <AddressSearch onSubmit={this.onSearchSubmit}/>
                <div>
                    The balance is: {this.state.balance}
                </div>

                <div className="ui container" style={{ marginTop: '10px'}}>
                    <InforInput onSubmit={this.onTransactionSubmit}/>
                </div>
            </div>
        );
    }
}

export default App;