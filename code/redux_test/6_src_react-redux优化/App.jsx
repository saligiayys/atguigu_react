import React, { Component } from 'react'
import Count from './containers/Count'
// import store from "./redux/store";

export default class App extends Component {


	render() {
		return (
			<div>
				<Count/>

				{/*如果有多个组件，不需要一个一个的传入store。只需在App的上一层，即index.js里进行配置，使用Provider组件*/}
				{/*<Count store={store}/>*/}
				{/*<Demo1 store={store}/>*/}
				{/*<Demo2 store={store}/>*/}
				{/*<Demo3store={store}/>*/}
			</div>
		)
	}
}
