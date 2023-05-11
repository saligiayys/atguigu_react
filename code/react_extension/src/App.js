import React, { Component, Fragment } from 'react'
import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
	//通过修改上面Demo的引用路径，来使用不同的组件。
	//注意8_ErrorBoundary需要再往下写一层目录，因为里面用的不是App组件，而是Parent组件

	render() {
		return (
			<Fragment>
				<Demo />
			</Fragment>
		)
	}
}
