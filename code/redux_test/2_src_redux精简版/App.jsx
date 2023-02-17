import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {
	//精简版，省略了Action Creators
	// Store只有一个
	// 之所以叫Reducers，是因为每一个组件都需要有一个专门的Reducer
	// 所有Redux相关的文件，都放在redux目录里

	//安装Redux yarn add redux

	render() {
		return (
			<div>
				<Count/>
			</div>
		)
	}
}
