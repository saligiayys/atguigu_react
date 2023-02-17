import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	//需求：给所有路由路径前加一个固定的前缀，可以是项目名或公司名，比如：/atguigu/about
	//问题：刷新页面后，BootStrap样式丢失

	//修改路径之前，通过开发者工具NetWork查看bootstrap.css这个请求，里面的Request URL是http://localhost:3000/css/bootstrap.css
	//在地址栏输入该url可以成功得到bootstrap的代码(或者看Response里的内容)。刷新页面后，地址依旧和上面一样，页面样式也没有丢失。
	//React脚手架localhost:3000是一个内置的服务器。是由webpack的devServer开启的。目的是为了得到一个最真实的开发场景。
	//所以localhost:3000就代表了React脚手架。其中的public文件夹，就是localhost3000的根路径。
	//所以localhost:3000/css/bootstrap.css就相当于public/css/bootstrap.css
	//如果访问一个不存在的文件，比如：localhost:3000/css/favicon.ico，脚手架里默认进行了一个配置，如果你请求一个不存在的资源，则会把public/index.html给你。、
	//所以index.html相当于一个兜底。凡是你请求的东西不存在，就把它给你。

	//修改路径后，第一次打开，由于还未点击Home或About，因此直接显示的是index.html，bootstrap.css请求的url也是http://localhost:3000/css/bootstrap.css
	//众所周知，前端路由点击路由的链接是不发送网络请求的。因此即使点击了Home或About，页面依然是正常的，因为没有重新请求bootstrap
	//但一旦点击了刷新，页面的样式丢失。虽然bootstrap请求依然显示200（请求成功），但url变成了http://localhost:3000/atguigu/css/bootstrap.css
	//也就是atguigu被认为样式路径的一部分了。相当于public/atguigu/....但我们本地并没有aiguigu这个路径！
	//因此找不到bootstrap样式，只能返回index.html，所以出现了样式丢失。且控制台也会发出一个警告。

	//结论：路由路径是多级的结构，当刷新时，样式就会丢失。原因是atguigu被认为是路径的一部分
	//解决方式有三种：
	//首先注意，单页面应用只有一个页面，即public下的index.html，所有组件都是从这里开始的。
	//方式1:常用
	//把引入bootstrap时用的的路径：'./css/bootstrap.css' 换成 ：'/css/bootstrap.css'  也就是把.去掉
	//原理，因为是相对路径，./的意思是以当前路径出发，在当前文件夹下找。
	//当前文件是index.html!!! 所以路径变为http://localhost:3000/atguigu/css/bootstrap.css的话，就当然找不到了。
	//而 /的意思是直接在localhost:3000下去找，或者说 / 代表的是在根目录

	//方式2：只适用于React脚手架。
	//把引入bootstrap时用的的路径换成：'%PUBLIC_URL%/css/bootstrap.css'
	//%PUBLIC_URL%代表的就是public的绝对路径

	//方式3：用得少
	//如果坚持使用'./css/bootstrap.css'，需要在src下的index.js里把BrowserRouter改成HashRouter
	//路径变为：localhost:3000/#/ 		之前讲过，#后的东西都认为是前端的资源，不会发给3000这台服务器
	//所以atguigu会被忽略，bootstrap的地址依然为http://localhost:3000/css/bootstrap.css

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
							<MyNavLink to="/atguigu/about">About</MyNavLink>
							<MyNavLink to="/atguigu/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route path="/atguigu/about" component={About}/>
									<Route path="/atguigu/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
