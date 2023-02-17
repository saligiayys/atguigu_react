import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'
//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

//在一个文件里，是可以写多个组件的！
//因为暴露的是容器组件，且components文件夹是用来放UI组件的，因此这个组件依然放在containers文件夹里。（约定俗成，也不是绝对）


//定义UI组件
class Count extends Component {

	state = {carName:'奔驰c63'}

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		this.props.jia(value*1)
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		this.props.jian(value*1)
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.jia(value*1)
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		this.props.jiaAsync(value*1,500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h1>当前求和为：{this.props.count}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}

//优化：
//使用connect()()创建并暴露一个Count的容器组件
//这里的state和jia等方法会直接传递给上面的UI里的props
export default connect(
	state => ({count:state}),

	//mapDispatchToProps的一般写法，要求是个函数。代码层级的优化
	/* dispatch => ({
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}) */

	//mapDispatchToProps的简写，可以写成一个对象。api层级的优化
	//使用简写版，即使没有显式的调用dispatch，但react-redux可以帮你自动执行这个分发的操作。
	//相当于点到为止，只是准备好对应的action，由react-redux来自动dispatch，因为人家已经封装好了。这就是api层级的优化
	//所以截至目前，madDispatchToPros可以传入两种值：1.函数 2.对象
	{
		jia:createIncrementAction,//不需要写num，因为其实在count_action里已经写好了要接受的参数，这里相当于把这个函数传给了UI组件，不需要再在这里调用。
		jian:createDecrementAction,
		jiaAsync:createIncrementAsyncAction,
	}
)(Count)


