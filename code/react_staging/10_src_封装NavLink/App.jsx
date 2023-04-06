import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About' //About是路由组件
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	// 封装NavLink
	// 如果我有很多路由组件，都需要点击后高亮，会出现有很多如下的代码。
	// <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>
	// 每行都要写相同的activeClassName="atguigu" className="list-group-item"代码
	//因此可以使用NavLink的封装来简化，不用再一遍遍写相同重复的内容了，只写不一样的内容即可。
	// 这个案例中，我们把共用的内容封装到MyNavLink组件里。注意，该组件是一般组件！

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header />
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 本节重点：标签体内容是一种特殊的标签属性，可以被props收集并传递，key为children(预定义的)，值为你写的标签体内容 */}

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							{/* <MyNavLink to="/about" title="About" a={1} b={2} />
							<MyNavLink to="/home" title="Home" /> */}
							{/* 如果MyNavLink里有7组标签属性呢？MyNavLink将会很长。。。，MyNavLink取props的时候也会很长*/}
							{/* 如何批量传递呢？可以用...props的方式展开 */}

							{/* 优化 */}
							{/* 
							注意NavLink并不是自闭和标签，而目前的MyNavLink是自闭和标签。而使用开始标签和结束标签可以更直观的看到标签体内容。因此最好不要通过title来设置标签体的内容。且也应该和NavLink保持一致才是合格的封装。
							我们都知道，标签属性会收集在props里并传递。可是如何收集标签体内容呢？你会神奇的发现，当你使用了标签体，MyNavLink组件在接受props的时候，自动多了一个叫children的属性，值就是这里的标签体内容。即标签体内容，是一个特殊的标签属性，也会被props收集并传递，key为children。
							注意自闭合组件标签，和非自闭合组件标签的使用。如果组件有标签体，则可以直接使用非自闭合标签，直接写入内容。且标签体内容，是一个特殊的标签属性,props也可以帮你收集。React会自动指定一个key叫children。
							*/}
							<MyNavLink to="/about" a={1} b={2}>About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>

							{/*测试：这样写都可以输出Home组件的名字，因为标签体内容是特殊的属性*/}
							{/*<NavLink to="/home">Home</NavLink>*/}
							{/*<NavLink to="/home" children="Home"/>*/}
							{/* 注意children是预定义的，只要你给children赋值了，react就会识别children，把值渲染到标签体上 */}
							{/* <MyNavLink to="/about" children='Test' /> */}

						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Route path="/about" component={About} />
								<Route path="/home" component={Home} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
