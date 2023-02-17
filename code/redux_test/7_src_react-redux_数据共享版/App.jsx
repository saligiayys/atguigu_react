import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'

export default class App extends Component {

	//需求：添加一个Person组件，实现Person和Count通过Redux来数据共享。

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
