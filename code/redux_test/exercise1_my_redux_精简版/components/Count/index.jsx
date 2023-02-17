import React, {Component} from 'react';
import store from "../../redux/store";

class Count extends Component {

    increment = () => {
        const {value} = this.selectNumber;
        store.dispatch({type:"increment",data:value*1});
    }

    decrement = () => {
        const {value} = this.selectNumber;
        store.dispatch({type:"decrement",data:value*1});
    }

    incrementIfOdd = () => {
        const {value} = this.selectNumber;
        if (store.getState() % 2 !== 0) {
            store.dispatch({type: "increment", data:value*1});
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
            const {value} = this.selectNumber;
            store.dispatch({type:"increment",data:value*1});
        },2000)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{store.getState()}</h2>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当求和为奇数是加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}

export default Count;