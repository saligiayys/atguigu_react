import React, { Component } from 'react'
//prop-types这个库，react没有帮我们下载。我们需要自己下载：yarn add prop-types 注意加s，否则是另外一个库
import PropTypes from 'prop-types'
import {nanoid} from 'nanoid' //该库是分别暴露的
import './index.css'

export default class Header extends Component {

	//对接收的props进行：类型、必要性的限制
	static propTypes = {
		addTodo:PropTypes.func.isRequired,
		todos:PropTypes.array.isRequired
	}

	//键盘事件的回调。因为发生事件的那个元素正好是你将要操作的那个元素，所以使用event.target即可，不需要使用ref
	handleKeyUp = (event)=>{
		//解构赋值获取keyCode,target。在event身上有很多属性，keyCode是其中之一
		const {keyCode,target} = event
		const {todos} = this.props;
		//判断是否是回车按键。建议不要用keyCode，直接用key
		if(keyCode !== 13) return
		//添加的todo名字不能为空。应该再加一个不能重复，但这里没做，下面自己做了
		if(target.value.trim() === ''){//去掉空格
			alert('输入不能为空')
			return;
		}

		//自己优化的，name不能重复。
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].name === target.value) {
				alert("输入重复！");
				return;
			}
		}
		
		//不能用forEach，好像因为是异步？
		// todos.forEach(todoObj => {
        //     if (todoObj.name === target.value) {
        //         alert("输入内容重复！")
        //         return;
        //     }
        // })

		//准备好一个todo对象
		const todoObj = {id:nanoid(),name:target.value,done:false}//默认值是未完成（已完成就不用往里面放了）
		//id可以用很多方法，比如Math生成随机数，时间戳啥的。但Math生成的有小数点，而时间戳有万分之一的可能两个人在同一时刻点击。
		//这里建议使用uuid或nanoid这两个库，可以生成世界唯一标识。nanoid相对体积小一点。
		//npm i uuid /  yarn add nanoid
		//npm i uuid / yarn add nanoid
		//这里使用nanoid
		//安装完毕在上面引入。它里面只暴露了nanoid这个函数，所以只能使用分别暴露的方式。
		//nanoid() 每次调用都会生成一个保证是全球唯一的字符串
		//ps:实际开发用的不多，都是后端生成
		//弹幕：之所以不使用在App里使id自增的方式，是因为考虑了删除的情况。

		//将todoObj传递给App
		this.props.addTodo(todoObj)
		//清空输入
		target.value = ''
	}

	render() {
		return (
			<div className="todo-header">
				<input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
			</div>
		)
	}
}