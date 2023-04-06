import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'

export default class Home extends Component {

	/*
	React里，路由的注册是有先后顺序的。匹配时，也要按照先后顺序，从头到尾完整地进行逐层匹配(先是App里的路由，点击完Home才能到达这里的路由)。
	也就是每次匹配都是从第一个注册的路由到最后注册的路由进行依次匹配。
	如果下面写的路径只是/news
	点击News链接后的匹配顺序是，先在App组件的路由里匹配。
	因为/news匹配不上Home和About，因此会匹配到App里的Redirect，从而直接跳转到App的Redirect指定的路径。
	因此只有匹配到了/home，Home组件才会被挂载，进而才会执行Home组件的代码，注册里面的路由。
	也就是说 /home/news不是直接进入到home里来匹配，而是也要先从App匹配。

	因此我们在Home组件里，必须给子路由组件的路径加上父路由组件的路径，即/home/news
	点击News链接后，匹配的顺序是，先在App组件里的路由中匹配。
	由于模糊匹配的存在，/home/news可以被/home匹配到，进而挂载了Home组件。
	所以我们才能看到Home组件，且Home组件没有丢失。
	当Home组件一挂载，Home组件里的代码执行了，又注册了新的路由/news和/message
	从而继续路由的匹配，并完美匹配了/home/news。

	给Home组件添加Redirect。
	工作原理：如果不写Redirect，点击Home后，没点News或Message时的路径是local:3000/home/，和上一节讲的一样，/后是空串''
	写了Redirect后，点击Home后，没点News或Message时的路径是local:3000/home/，无法匹配/home/news和/home/message
	因此最后匹配到了Redirect跳转到/home/news。

	因此，如果给App里的/home开启了严格匹配模式，/home/news就无法匹配到App里的/home
	进而使用了Redirect的路径，跳转到About。换句话说，Home下的子路由全废了，都无法点击。
	所以之前说了，严格匹配模式，不要随便开启。
		*/

	render() { 
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/home/news" component={News} />
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news" />
					</Switch>
				</div>
			</div>
		)
	}
}
