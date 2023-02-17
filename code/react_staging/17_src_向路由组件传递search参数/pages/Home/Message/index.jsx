import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	/*
		传递参数方式2：search参数。传递比params简单，但接收麻烦
		1.传递search参数：特点不用声明接收，正常路由即可。只是取的时候稍微麻烦点
		//<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

		2.申明接收search参数
		search参数无需声明接收，正常注册路由即可
		浏览器地址栏：http://localhost:3000/home/message/detail/?id=01&title=消息1   和ajax的query参数非常像

		3.接收search参数：见Detail的html.jsx
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
									<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				<Route path="/home/message/detail" component={Detail}/>

			</div>
		)
	}
}
