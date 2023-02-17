import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	//补充：包管理器npm和yarn不要混着用。安装时不要一会yarn add a 一会 npm i b，可能会造成包的丢失。
	//启动时，npm start或yarn start都可以。

	//模糊匹配：默认
	//如果MyNavLink里设置的路径是"/home/a/b"，Route里要匹配的是"/home"，由于/home/a/b包含了/home，因此可以匹配上。
	//但反之MyNavLink里是"/home"，Route里是"/home/a/b"，则匹配不成功。
	//如果MyNavLink里设置的路径是"/a/home/b"，则也匹配不成功。
	//因为人家要的是/home，而这里是/a/home/b  真正拿出来的是 home    a home b  （去掉了/）
	//结论，是按照顺序依次匹配。且如果一上来就匹配到了，则直接匹配成功；反之一上来就错了，则直接失败。
	//窍门：人家要的东西，一个都不能少，且顺序也不能乱。

	//精准匹配 或 严格匹配：
	//MyNavLink里设置的路径，必须和Route里要匹配的路径完美对应。
	//方式：在Route标签里添加属性: exact={true} 或简写 exact (因为js里，对象就是true)

	//注意，精准匹配不要随便开，有的时候会带来严重问题，比如无法匹配二级路由。
	//使用原则：如果没有耽误你页面的呈现，没有引发其他的问题，则不开启精准匹配。如果不开启精准匹配，会引发一些问题，则再开启
	//一句话：如果东西都是好好的，严格匹配不要碰。如果出现一些诡异的状况，看看是不是模糊匹配导致的，如果是，再开启精准匹配。

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
							<MyNavLink to="/home/a/b">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									<Route exact path="/about" component={About}/>
									<Route exact path="/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
