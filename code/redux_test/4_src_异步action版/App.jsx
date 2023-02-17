import React, { Component } from 'react'
import Count from './components/Count'

export default class App extends Component {

	/*
		同步action和异步action
		之前说，action其实就是obj对象，里面有type和data
		但其实action还可以是函数function。
		1.action是obj对象 --- 同步action
		2.action是函数	--- 异步action

		需求：之前我们的异步加操作，是在Count组件里写的定时器，即Count组件自己等待的。
		而现在我们不希望是Count组件来等，而是由redux的action creator来实现。

		就比如之前讲的类比餐厅吃饭的例子，现在客人(组件)希望过一会再上菜，有两种方式。
		1.客人自己等5分钟，然后叫服务员点餐。--- 同步
		2.客人马上交服务员点餐，但要求5分钟后再上菜！--- 异步

		此时就要借助异步action来实现。
		但是，虽然异步action的值是函数，但store只认可同步action。此时就需要借助redux-thunk中间件来和store“沟通”
		//yarn add redux-thunk

		注意：异步action不是必须要用的。看你的需要，也可以像之前似的，还在组件里进行异步操作。

	 */

	render() {
		return (
			<div>
				<Count/>
			</div>
		)
	}
}
