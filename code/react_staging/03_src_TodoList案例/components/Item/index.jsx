import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

	//这里其实也应该写propTypes进行限制，但老师没写的目的是为了告诉你，这个在实际开发中很多人不写。但是推荐写（而且有ts就不需要propTypes了）

	state = {mouse:false} //标识鼠标移入、移出。一上来默认是false，即鼠标没有在任何人的身上

	//鼠标移入、移出的回调。要使用高阶函数，返回一个函数。因为在标签里是onMouseEnter={this.handleMouse(true)}，相当于调用了这个函数。
	handleMouse = (flag)=>{
		return ()=>{//react帮助调用的是这个return的函数
			this.setState({mouse:flag})
		}
	}

	//勾选、取消勾选某一个todo的回调。同上，也需要高阶
	handleCheck = (id)=>{
		return (event)=>{//勾选的是input，同时也要获取它的值，因此可以使用event.target
			// console.log(id,event.target.value);//value输出永远是on，因为input使用了check，所以不能再使用.value，而是使用.checked
			// console.log(id,event.target.checked);// checked输出false或true

			//接收父组件List传来的App的updateTodo，再吧id和 勾选的值 传回给 -> List -> App
			this.props.updateTodo(id,event.target.checked)
		}
	}
	//删除一个todo的回调
	//这里没有和上面一样使用高阶函数，而是非柯里化的方式：在button标签里直接传入一个回调函数onClick={()=> this.handleDelete(id) }
	//之前在讲不用柯里化的时候使用过这种方式
	handleDelete = (id,name)=>{
		//使用confirm()进行判断，如果点击确定，返回true；点击取消，返回false。用在if里很方便
		//ps：必须使用window.
		if(window.confirm(`确定删除[ ${name} ]吗？`)){//ps：我自己加了个name
			this.props.deleteTodo(id)
		}
	}

	//补充：在react里，checked=true只读，写死了，点击无效。除非用onChange
	//而，defaultChecked是默认，也就是只管你一上来勾选还是不勾选，仍然可以点击
	//但defaultChecked是临时的措施，它可能会产生bug。后续会换成别的。
	//这个bug是，在Footer里，已完成的左边有一个全选或全不选按钮。
	//因为defaultChecked只有一上来勾选或不勾选，因此之后无论上面的item是否全部勾选与否，它都不会再自己改变了
	//注意这里说的是自己改变。例如：因为它只会在第一次生效。如果一上来下面判断为false，即使你把上面的Item都勾选了，之后它也不会自己勾选，除非你点它
	//同时在点击全选或全不选按钮时，Item里也应该被选中或不选中，因此也要把defaultChecked改成checked，并搭配onChange
	//如果看不懂再看一遍63集16分45秒

	//onmouseleave与onmouseout区别
	//onmouseleave、onmouseenter，鼠标进入到指定元素区域内触发事件，不支持冒泡，不包含子元素的区域。
	//onmouseout、onmouseover、鼠标进入指定元素触发事件，含子元素区域。

	render() {
		const {id,name,done} = this.props
		const {mouse} = this.state//mouse会在state里修改true或false，用于判断下面的三元运算
		return (//根据鼠标的移入或移出事件，直接在参数里传入true和false即可，但注意这个函数的返回值应该也是个函数
			<li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
				<label>
					{/* <input type="checkbox" defaultChecked={done}/> */}
					<input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
					<span>{name}</span>
				</label>
				<button onClick={(event)=> this.handleDelete(id,name) } className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
			</li>
		)
	}
}