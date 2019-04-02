import React from 'react';
import AddressSearch from './AddressSearch';

class App extends React.Component {
    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px'}}>
                <AddressSearch onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;