import React, { Component } from 'react'

export default class Demo extends Component {
	//结合README看

	state = {count:0}

	add = ()=>{
		//写法1：对象式的setState
		//1.获取原来的count值
		// const {count} = this.state
		// //2.更新状态
		// this.setState({count:count+1},()=>{
		// 	console.log(this.state.count);//1
		// })
		// //console.log('15行的输出',this.state.count); //0

		// react修改状态其实是个异步的操作。
		// setState其实还可以传入第二个参数，是一个回调函数，可选的。在状态更新完毕且render执行完毕后才会调用。
		// setState的调用，是我们在主线程上同步调用的。而真正修改状态是react之后帮我们修改的。
		// 相当于我们调用这个方法给react传递一个指令，让其修改状态。但react并不是立刻修改。
		// 也就是setState引起react后续更新状态的动作是异步的。（相当于你让一个人帮你买一瓶水，他不能立刻买回来。但你要求他买水这个方法是同步的，他去买水是异步的。）


		//写法2：函数式的setState。可以接收state和props，不需要再自己通过const {count} = this.state的方式获取了
		// this.setState((state,props) => {});
		this.setState( state => ({count:state.count+1}))//这里没用到props
		//此写法也可以传入第二个参数，是一个回调函数。规则和写法1一样。
		//其实写法1是写法2的语法糖。
		//总结：没啥太大区别，喜欢用哪个就用哪个。
	}

	render() {
		return (
			<div>
				<h1>当前求和为：{this.state.count}</h1>
				<button onClick={this.add}>点我+1</button>
			</div>
		)
	}
}
