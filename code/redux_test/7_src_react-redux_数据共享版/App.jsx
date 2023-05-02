import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

	//从这节课开始真正实现多个状态，组件的数据共享
	//需求：添加一个Person组件，实现Person和Count通过Redux来数据共享。

	//Person的reducer里有纯函数相关的内容

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
