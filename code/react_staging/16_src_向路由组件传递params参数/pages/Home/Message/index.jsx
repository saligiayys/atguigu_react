import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	/*
	该案例面临Message给其子路由组件Detail传递参数的问题。需要在路由跳转的同时，把数据传递过去。
	有三种方式(参数)：params,search,state   三个用的都很多，都需要掌握。比较而言，params > search > state
	之所以叫这三个名字，是因为通过这三种方式传递的参数最终会分别落到路由三大属性的match.params，location.search，以及location.state里

	传递参数方式1：使用params参数，特点是可以直接在路径里面写。(这节课稍微复习了一下ajax传递参数的几种方式，看截图)
	1.在编写路由的时候，传递params参数
	使用模板字符串，但它是js里的东西，因此需要使用{}包裹
	to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}
	但光这么传还不够，要在路由注册那里声明接收。否则由于模糊匹配，/detail后的内容都会被忽略(之前讲过，<Link>可以多传，但不能少于<Route>需要的)。

	2. 在注册路由的时候，声明要接收params参数
	接收参数需要key:value的模式
	path="/home/message/detail/:id/:title"
	前面的/home/message/detail是路由的path值，后面的/:id就是所携带的参数  （类似express）
	浏览器地址栏：http://localhost:3000/home/message/detail/01/消息1		可以看出，和ajax的params参数非常像

	3.接收params参数：见Detail的index.jsx
	以上的数据 id和title 会被保存到Detail组件的props属性中的match里的params里
	(match，在09_NavLink里提到过，三大路由属性之一)

	复习：之前的ajax请求可以携带的参数
	query
	params
	body：body有两种编码形式：urlencoded 和 json
	*/

	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' },
		]
	}

	render() {
		const { messageArr } = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj) => {
							return (
								<li key={msgObj.id}>
									{/* 向路由组件传递params参数 */}
									<Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
									{/*因为不需要高亮效果，所以没有使用NavLink。注意路径的写法，前面的一级路径和二级路径一定要写完整。*/}
								</li>
							)
						})
					}
				</ul>
				<hr />
				{/*只有一个组件，所以不需要Switch*/}
				{/*这里面临给路由组件传递参数的问题*/}
				{/* 在注册路由时，声明接收params参数，注意这里的:id是自己取得名字，不需要和msgObj.id一样*/}
				<Route path="/home/message/detail/:id/:title" component={Detail} />
			</div>
		)
	}
}
