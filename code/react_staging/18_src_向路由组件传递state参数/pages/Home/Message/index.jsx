import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	/*
		传递参数方式3：state参数 注意不是组件里的state，而是路由组件里独有的
					优势：传递的数据不会体现在地址栏里。
		1.传递state参数：to={{}} to是一个对象(注意是两层{}，第一层是js表达式)，不再是一个字符串
		<Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
		既然是对象，就可以使用多组key-value。注意第一个key是pathname，不是path

		ps:其实params和search的方式，to也可以是一个对象，但你只需把参数写进路径即可，为啥还要费二遍事呢？

		2.申明接收search参数：
		state参数无需声明接收，正常注册路由即可
		浏览器地址栏：http://localhost:3000/home/message/detail   地址栏没有携带数据

		3.接收state参数：见Detail的html.jsx
	 */

	state = {
		messageArr:[
			{id:'01',title:'消息1'},
			{id:'02',title:'消息2'},
			{id:'03',title:'消息3'},
		]
	}
	render() {
		const {messageArr} = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>

									{/* 向路由组件传递params参数 */}
									{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递search参数 */}
									{/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递state参数 */}
									<Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>

								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* state参数无需声明接收，正常注册路由即可 */}
				<Route path="/home/message/detail" component={Detail}/>

			</div>
		)
	}
}
