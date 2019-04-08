import React from 'react';
import axios from 'axios';
import AddressSearch from './AddressSearch';
import InforInput from './InforInput';

class App extends React.Component {
    state = {balance: ''};

    onSearchSubmit=  async(term) =>{
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${term}/balance`);
        this.setState({ balance: response.data.balance});
    }

    onTransactionSubmit = async(newtx) =>{
        const response = await axios.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx));
        console.log(response);
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