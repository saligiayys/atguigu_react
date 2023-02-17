import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {

	//相比精简版，使用了action creator来创建action对象。
	//同时在工作中，常常会定义一个常量模块constant。用于定义action对象中type类型的常量值，目的只有一个：便于管理的同时防止程序员单词写错
	//因为之前我们都是手写的，如果操作多了，比如开方，平方根什么的，万一写错单词，不容易排查。

	render() {
		return (
			<div>
				<Count/>
			</div>
		)
	}
}
