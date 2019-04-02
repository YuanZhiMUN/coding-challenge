import React from 'react';
import axios from 'axios';
import AddressSearch from './AddressSearch';

class App extends React.Component {
    state = {balance: ''};

    onSearchSubmit=  async(term) =>{
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${term}/balance`);
        this.setState({ balance: response.data.balance});
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <AddressSearch onSubmit={this.onSearchSubmit}/>
                <div>
                    The balance is: {this.state.balance}
                </div>
            </div>
        );
    }
}

export default App;