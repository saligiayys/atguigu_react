import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

export default class App extends Component {
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
									{/*正常情况下，都是一个路径匹配一个组件，这里是为了演示才加了一个Test。
									路由器匹配到一个组件后，其实会继续向下匹配，如果有两个组件都匹配到了同一路径，则会都展示出来。这样不光影响效率，也不能
									满足我们只想展示一个组件的需求。我们希望一旦匹配上，就不要再继续匹配了。
									这时我们可以使用Switch组件(在上面引入)！！！把注册的路由包裹进Switch组件标签。
									一旦匹配到43行的/home对应的Home，就不会再继续向下匹配/home对应的Test了！单一匹配，效率更高。
									一般超过1个路由组件时，都会使用Switch包一下。*/}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Route path="/home" component={Test}/>
									{/*<Route path="/home" component={Test}/>*/}
									{/*<Route path="/home" component={Test}/>*/}
									{/*<Route path="/home" component={Test}/>*/}
									{/*<Route path="/home" component={Test}/>*/}
									{/*<Route path="/home" component={Test}/>*/}
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
