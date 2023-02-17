import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {

	//react-redux是FaceBook看到大家都喜欢使用Redux后，由FaceBook官方开发的。
			 //1.	一个react插件库
			// 2.	专门用来简化react应用中使用redux
	//要求UI组件外不许包裹一个容器组件。
	//UI组件不能直接和react-redux交互，需要容器组件通过props向UI组件传递(容器组件是UI组件的父组件，很容易通过props传递数据)
	//UI组件不包含任何redux相关的api，只负责页面的呈现和绑定事件，比如鼠标事件等。
	//UI组件放在components文件夹里。容器组件放在containers文件夹里。

	render() {
		return (
			<div>
				{/* 给容器组件传递store */}
				{/*这是一个难点。因为按照正常思维，哪里需要就在哪里引入。但Count容器组件需要的store就得在App里，通过props引入！！*/}
				{/*具体为啥，后面讲优化的时候讲*/}
				<Count store={store} />
			</div>
		)
	}
}
