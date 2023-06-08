import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {

	//前几节课只用Redux维护了一个状态。
	//多个状态从"7_src_数据共享版"开始看

	//精简版，省略了Action Creators
	// Store只有一个
	// 之所以叫Reducers，是因为每一个组件都需要有一个专门的Reducer，所以有s
	// 所有Redux相关的文件，都放在redux目录里

	//安装Redux yarn add redux
	//现在改了npm install @reduxjs/toolkit react-redux

	render() {
		return (
			<div>
				<Count />
			</div>
		)
	}
}
