import React, {Component} from 'react';

import Search from './components/Search'
import List from './components/List'

class App extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:"",
    }

    // saveUsers = (users) => {
    //   this.setState({users});//简写：users:users
    // };
    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        const {users} = this.state;
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;