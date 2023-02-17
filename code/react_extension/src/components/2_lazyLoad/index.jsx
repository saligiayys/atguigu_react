import React, { Component,lazy,Suspense} from 'react'
import {NavLink,Route} from 'react-router-dom'

//非懒加载引入：
// import Home from './Home'
// import About from './About'

//Loading不能懒加载，因为它是用来提示用户懒加载正在加载中的。。。。。不然就死循环了。。。
import Loading from './Loading'
//懒加载引入：
//lazy函数的形参也是一个函数。
//import除了之前的用法，它还支持函数调用，即import()
const Home = lazy(()=> import('./Home') )
const About = lazy(()=> import('./About'))

//由于是懒加载，即点击哪个哪个加载。但有时会遇到网络不好的情况，如果一直白屏对用户的体验不好。
//所以我们需要指定一个组件，让用户能看到些东西才行。使用react的内置组件Suspense的fallback属性。
//引入Suspense组件。
//使用Suspense组件标签包裹所有注册路由的内容。为Suspense指定fallback属性。
//fallback的值可以是一个组件，也可以是一个虚拟DOM
//如果是组件，这个组件不能使用懒加载引入，因为它必须提前就位！

export default class Demo extends Component {
	//路由组件的懒加载多半都要做。需要用到react里的lazy函数(在上面引入)
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
							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/*<Suspense fallback={<h2>Loading......</h2>}>*/}
								<Suspense fallback={<Loading/>}>
									{/* 注册路由 */}
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
								</Suspense>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
