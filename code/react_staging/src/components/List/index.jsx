import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		todos:PropTypes.array.isRequired,
		updateTodo:PropTypes.func.isRequired,
		deleteTodo:PropTypes.func.isRequired,
	}

	render() {
		//接收从App传来的props
		//updateTodo，需要转手传给子组件Item，自己不用
		const {todos,updateTodo,deleteTodo} = this.props
		return (
			<ul className="todo-main">
				{
					todos.map( todoObj =>{
						//updateTodo不用加this.，因为不是List自己的，而是从App接收来的
						return <Item key={todoObj.id} {...todoObj} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
						// return <Item key={todoObj.id} name={todoObj.name} id={todoObj.id} done={todoObj.done} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
						//使用{...todoObj}，代替name={todoObj.name} id={todoObj.id} done={todoObj.done}，是等价的
						//不能写成 todoObj={...todoObj}和App里传递todo={todo}是两回事
						//todoObj是一个对象，里面有id,name,done。而todo是一个数组，是由todoObj对象组成的
						//弹幕说，可以写成todoObj={todoObj}，然后在Item里取todoObj，然后todoObj.id也行？
					})
				}
			</ul>
			//使用{...todo} 批量向Item组件传入props
		)
	}
}