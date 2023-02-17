import React, { Component } from 'react'
//react这个库，既有默认暴露，也有分别暴露

// import {Link,BrowserRouter,Route} from 'react-router-dom'
//react-router-dom这个库使用的是分别暴露，没有默认暴露。因此用哪个取哪个
//Link首字母大写，意味着它是组件。BrowserRouter，Route同理
//在前端路由的基石_history里讲过，之前有两种创建History的方式，1：createBrowserHistory 2：createHashHistory
// react里也是，分为BrowserRouter和HashRouter两个路由器。这里先使用BrowserRouter
//先提一下：HashRouter的路径长这样：localhost:3000/#/home。#后面的都是哈希值，不会发送给服务器，被视为前端资源。
//react规定，一个页面只能由一个路由器管理（使用BrowserRouter或HashRouter标签包裹住）
//一劳永逸的办法，是用BrowserRouter/HashRouter标签	包裹住index.js里的App组件！！！
import {Link,Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
//截至目前，在react脚手架里没有帮我们下载的库有：react-router-dom 和 prop-types

export default class App extends Component {
	//SPA 单页面应用：单页面，多组件
	//前端路由的原理（具体可以看06_其他->前端路由的基石_history）
	//点击导航区里的导航按钮，引起浏览器历史记录路径的变化，被前端路由器所检测到。发现路径，比如/home，就把Home组件展示
	//总结两步：1.点击导航链接，引起浏览器路径变化  2.路径的变化被路由器检测到，然后进行匹配组件，最终展示组件。

	//这里使用04静态页面的route_page1
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
							{/*注意点，/about不要写成大写，也不要写成./	*/}
							{/*细节：虽然react里改成了Link标签，但浏览器其实不认识它，最后呈现在浏览器里的其实还是a标签，但通过某种方式，使其不会跳转	*/}
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由: 比如/about路径对应About组件，使其产生映射关系 */}
								{/*意思就是：如果路径变成了/about，就展示About组件。注意component的c是小写的。也不要写成{<About/>}*/}
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
