import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {

	//之前页面一上来，如果不点击Home或About，则哪个都不选中，展示的是index.html
	//我们希望一上来可以默认选中一个组件进行展示。
	//我们需要借助Redirect组件（在上面引入）
	//Redirect：重定向

	//补充：其实一上来，页面就开始匹配了。
	//你输入localhost:3000/和localhost:3000是一样的，只是没有体现出这个 /
	//所以相当于是拿着这个 / 去匹配。
	//比如 /home，是以/做分割，得到的其实是home去进行匹配
	//因此一上来的/ 相当于后面是空串 "" 所以自然不能匹配到Home或About，所以一上来页面没有展示内容

	//我们可以使用Redirect，放在所有路由的最下面。意思是如果前面所有路由都没有匹配上，就听Redirect的
	//比如：<Redirect to="/about"/>	相当于兜底的人
	//ps：且即使你输入的是http://localhost:3000/abc，也会跳转到http://localhost:3000/home

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
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
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
