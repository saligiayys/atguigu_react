import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	//讲解兄弟组件之间如何进行数据的交互！
	//消息订阅与发布机制
	//主流的工具库：PubSubJS    Angular里是Rxjs
	//yarn add pubsub-js  / npm i pubsub-js
	//import PubSub from "pubsub-js"			ps:包名的规范是不能有大写字母
	//在该案例中，List订阅消息，Search发布消息

	//因为现在兄弟组件之间可以直接交互了，因此不再需要App父组件作为“中间人”。真正成为了外壳组件！
	//其实，消息订阅与发布机制，不仅适用于兄弟之间的沟通，而是适用于任何组件之间沟通。
	//且PubSubJS是第三方库，不局限于React里，其他框架也可以使用。

	// state放在List里，因为是给List用，之前也是传给List
	// state = {
	// 	users:[],
	// 	isFirst:true,
	// 	isLoading:false,
	// 	err:'',
	// }

	//App连状态都没了，因此也就不用这个方法了！
	// updateAppState = (stateObj)=>{
	// 	this.setState(stateObj)
	// }

	render() {
		return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
	}
}
