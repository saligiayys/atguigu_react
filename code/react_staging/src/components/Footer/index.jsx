import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

	//全选checkbox的回调
	//接收App传来的checkAllTodo(done)
	handleCheckAll = (event)=>{
		this.props.checkAllTodo(event.target.checked)//获取这个全选全不选按钮的checked值（true/false）传回给App
	}

	//清除已完成任务的回调
	//接收App传来的clearAllDone()
	//我自己加了一个confirm
	handleClearAllDone = ()=>{
		if (window.confirm("确认要删除所有已完成的任务吗？")) {
			this.props.clearAllDone()
		}
	}

	render() {
		//接住App传来的todos数组
		const {todos} = this.props
		//根据todos计算已完成的个数
		//对数组进行条件统计，看看这个数组里有多少个元素的done为true。可以有很多种实现方式。比如for循环，里面定义一个counter，满足条件++
		//这里使用的是数组里的reduce归约方法，专门用来做统计的。
		//reduce(回调函数(pre,current)=>{return pre + 1}，初始值)
		//reduce里有两个参数，一个回调函数，和一个初始值
		//这个回调函数里有两个参数，pre和current
		//pre是这个回调上一次的返回值，第一次调用时，pre是reduce的第二个参数，初始值，这里是0。
		//因此在第二次调用时，current就是第一次调用的返回值
		//这个回调函数要返回pre + 1  因为第一次pre是0，返回pre=0+1=1 给第二次的pre使用。当整个执行完毕后，相当于计算出了总数，类似原始for里的counter++
		//当然在这个案例里，是否要+1，需要判断done是不是true。
		const doneCount = todos.reduce((pre,todo)=> pre + (todo.done ? 1 : 0),0)//箭头函数的函数体只有一句话，可以省略return和{}
		//根据todos计算总数
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					{/*这里是不能写defaultChecked的，因为它只会在第一次生效。如果一上来下面判断为false，即使你把上面的Item都勾选了，之后它也不会自己勾选，除非你点它*/}
					{/*因此这里必须使用checked，可以指定多次
					但在react里，使用checked必须搭配onChange，否则就写死了。之前在List组件里已经说过*/}
					<input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false}/>
					{/*当doneCount和total相等且总数total不能是0的情况下，选中全选/全不选框*/}
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
			</div>
		)
	}
}
