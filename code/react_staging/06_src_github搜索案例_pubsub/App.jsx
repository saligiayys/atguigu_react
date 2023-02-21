import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	/*
		订阅报纸：
			1.交钱，说好地址，订阅哪一种报纸
			2.邮递员送报纸
		
		订阅消息：
			1.消息名
			2.发布消息
	*/

	//讲解兄弟组件之间如何进行数据的交互！
	//消息订阅与发布机制
	//主流的工具库：PubSubJS    Angular里是Rxjs
	//可以去github上搜索PubSubJS来查看文档
	//yarn add pubsub-js  / npm i pubsub-js
	//import PubSub from "pubsub-js"			ps:包名的规范是不能有大写字母
	//在该案例中，List订阅消息，Search发布消息


	//把之前App里的那堆状态放在List里，为什么？因为都是给List用。然后List订阅，Search发布
	// state = { //初始化状态
	// 	users:[], //users初始值为数组
	// 	isFirst:true, //是否为第一次打开页面
	// 	isLoading:false,//标识是否处于加载中
	// 	err:'',//存储请求相关的错误信息
	// } 

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
				<Search />
				<List />
			</div>
		)
	}
}
