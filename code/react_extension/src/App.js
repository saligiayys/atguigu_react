import React, { Component,Fragment } from 'react'
import Demo from './components/3_hooks'

export default class App extends Component {
	//通过修改上面Demo的引用路径，来使用不同的组件。注意8_ErrorBoundary需要再往下写一层目录，因为里面不叫index.jsx
	render() {
		return (
			<Fragment>
				<Demo/>
			</Fragment>
		)
	}
}
