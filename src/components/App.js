import React from 'react';
import AddressSearch from './AddressSearch';
import InforInput from './InforInput';
import MyBarChart from './MyBarChart';

class App extends React.Component {
    state = {balance: '',
            showBalance: false,
            outputValues: [],
            outputAddress: [],
            show: false
        };

    onSearchSubmit = (term) => {
     fetch(`http://localhost:9000/balancesearch?address=${term}`)
     .then(res => res.json())
     .then(res=> this.setState({ balance: res.balance,
                                 showBalance: true}
            ))
     .catch(err => console.log(err));
    }

    onTransactionSubmit = (inputAdd, outputAdd, value) => {
        fetch(`http://localhost:9000/transaction?inputAdd=${inputAdd}&outputAdd=${outputAdd}&value=${value}`)
        .then(res => res.json())
        .then(res=> {console.log(res);
            res.data.tx.outputs.forEach( e => {
                this.setState({outputAddress: [...this.state.outputAddress, e.addresses[0]],
                    outputValues: [...this.state.outputValues, e.value],
                    show: true
                });
            });
        })
        .catch(err => console.log(err));
    }   

    render(){
        const show = this.state.show;
        const showBalance = this.state.showBalance;

        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <div className="ui container" style={{ marginTop: '10px'}}>
                    <AddressSearch onSubmit={this.onSearchSubmit}/>
                </div>
                {showBalance?<div>
                    The balance is: {this.state.balance}
                </div>: null}

                <div className="ui container" style={{ marginTop: '10px'}}>
                    <InforInput onSubmit={this.onTransactionSubmit}/>
                </div>
                {show? 
                    <div style={{ marginTop: '50px'}}>
                        <h3>The Values of Output Addresses</h3>
                        <MyBarChart data={this.state.outputValues}/>
                </div>: null}
            </div>
        );
    }
}

export default App;