import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

	//在浏览器里安装Redux DevTools
	//同时安装yarn add redux-devtools-extension，否则上面的工具无法使用
	//然后在redux的store.js里引入redux-devtools-extension，取出composeWithDevTools函数
	//把composeWithDevTools函数作为creatStore的第二个参数传入。如果之前creatStore已经有第二个参数(用于异步action)，
	//则把之前的第二个参数，作为composeWithDevTools的参数传入。

	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
