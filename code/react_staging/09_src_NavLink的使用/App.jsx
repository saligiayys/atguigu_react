import React, { Component } from 'react'
import {NavLink,Route} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件

export default class App extends Component {
	/*
		一般组件：<Home/> 是我们亲自写上去渲染的。
		路由组件：<Route path="/about" component={About}/> 先进行路由匹配，匹配上了，才展示。
		所以虽然在此案例中，Home和About是组件，但是是路由组件，规范来说不能放在component目录里，而是pages里（记得修改引入地址）
		但路由组件和一般组件最大的区别是：
			一般组件如果我们没有传递props，其props里是空的。换句话说传什么，props收到什么。
			而路由组件我们无法传递任何props，但收到路由器传递的三个最重要，固定的props的属性：
				1.history
				2.location
				3.match
				之后讲
 	*/

	//需求：点击路由链接，该链接高亮
	//需要把Link换成NavLink，是LInk的升级版。
	//原理，bootstrap会给添加了active类名的标签设置样式。所以我们之前主动给一个标签加上class="active"
	//而NavLink的特点是，只要点了这个标签，就自动追加active类名。react底层已经帮你封装好了。
	//这恰好使得这两者的设计理念刚好一样，因此可以直接触发这里的高亮效果。
	//注意：如果不想使用active类名，可以使用NavLink标签的属性activeClassName来自定义类名，默认是active
	//ps：因为使用了bootstrap，权重很高，因此需要在public/index.html里给样式设置更高的权限！

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
							<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
							<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
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
