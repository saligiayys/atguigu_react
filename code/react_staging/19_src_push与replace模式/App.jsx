import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

	/*
		之前说过路由的工作原理，主要是对浏览器的历史记录进行操作。
		有两个操作方式：push和replace
		push俗称压栈，历史记录是一个压一个的，会留下痕迹。路由跳转默认是push模式
			比如这个案例：
						第四个历史记录：localhost:3000/message.detail  	--->栈顶，当前页面
						第三个历史记录：localhost:3000/home/message
						第二个历史记录：localhost:3000/home/news   因为有Redirect				想象成是一个栈结构，后进先出
						第一个历史记录：localhost:3000/about   因为有Redirect
			该模式可以进行后退，前进
			依次点击消息1,2,3后，进行后退操作会再依次显示3,2,1


		replace，是替换掉当前的这个历史记录，不会留下痕迹
			如何开启replace模式：给Link标签加上replace属性，值为true，replace = {true} ，或直接简写 replace
			<Link replace to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
			见Detail组件。我们个那3个消息开启了replace模式
				栈里的结构：

						第三个历史记录：localhost:3000/home/message 当点击任意一个消息，比如消息1,时，被替换成localhost:3000/message.detail
						第二个历史记录：localhost:3000/home/news   因为有Redirect
						第一个历史记录：localhost:3000/about   因为有Redirect
				该模式也可进行后退，前进
				但因为只有detail设置了replace模式，
				则依次点击完消息1,2,3后，点击后退会直接退回到localhost:3000/home/news，因为/message已经被替换掉了
				而不管是消息1,2还是3，它们的路径都是localhost:3000/message.detail（因为用的是state）

		因此，如果给所有路由的跳转都改成了replace模式，如下的/about和/home
		则该页面无论点击什么，都不能后退，即无痕模式。

	 */

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink replace to="/about">About</MyNavLink>
							<MyNavLink replace to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Redirect to="/about"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
