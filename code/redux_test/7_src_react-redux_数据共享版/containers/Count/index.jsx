import React, { Component } from 'react'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/actions/count'
//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

//定义UI组件
class Count extends Component {

	state = { carName: '奔驰c63' }

	//加法
	increment = () => {
		const { value } = this.selectNumber
		this.props.jia(value * 1)
	}
	//减法
	decrement = () => {
		const { value } = this.selectNumber
		this.props.jian(value * 1)
	}
	//奇数再加
	incrementIfOdd = () => {
		const { value } = this.selectNumber
		if (this.props.count % 2 !== 0) {
			this.props.jia(value * 1)
		}
	}
	//异步加
	incrementAsync = () => {
		const { value } = this.selectNumber
		this.props.jiaAsync(value * 1, 500)
	}

	render() {
		//console.log('UI组件接收到的props是',this.props);
		return (
			<div>
				<h2>我是Count组件,下方组件总人数为:{this.props.renshu}</h2>
				<h4>当前求和为：{this.props.count}</h4>
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

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
	//之前只有Count组件的时候，redux里只有一个0。但如今，redux里是一个对象，保存了Count和Person组件的状态。
	// 因此不能光写count:state，而需要count:state.xxx
	// state => ({count:state}),

	//复习，这个state是redux里帮你保存的所有状态的总和的对象，是mapStateToProps函数传入的参数，这里简写了。
	//state是react-redux帮你自动传的，因为你在index.js里用Provider通过props传递了store
	state => ({
		count: state.he,
		renshu: state.rens.length
	}),
	{
		jia: createIncrementAction,
		jian: createDecrementAction,
		jiaAsync: createIncrementAsyncAction,
	}
)(Count)

