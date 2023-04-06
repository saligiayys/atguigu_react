import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {

	//案例需求：给每个消息的后面各添加两个按钮，一个是push，一个是replace。点击分别以push模式和replace模式跳转路由。
	//需要借助路由组件身上独有的api。即之前讲路由组件和非路由组件时提到过的，history里的go(),goBack(),push(),replace()等方法
	//replace(path,state) 以replace模式跳转路由。参数1：是跳转路径；参数2：如果使用state参数传递，则参数2是state
	//push(path,state) 以push模式跳转路由。参数1：是跳转路径；参数2：如果使用state参数传递，则参数2是state
	//go(n)前进n步，负数表示后退。
	//goBack()后退一步
	//goForward()前进一步

	//总结：只要是路由组件，就可以操作其身上的history属性，使其进行前进，后退，跳转等操作。玩的就是history身上的APIs

	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' },
		]
	}

	replaceShow = (id, title) => {
		//编写一段代码，使其实现跳转到Detail组件，且为replace跳转
		//只要是路由组件，就可以操作其身上的history属性，使其进行前进，后退，跳转等操作。
		//1.replace跳转+携带params参数
		//this.props.history.replace(`/home/message/detail/${id}/${title}`)  //这段代码，就是编程式路由导航，下面的也是。

		//2.replace跳转+携带search参数
		// this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

		//3.replace跳转+携带state参数
		this.props.history.replace(`/home/message/detail`, { id, title }) //这里简写了，因为名字一样。{id:id,title:title}
	}

	pushShow = (id, title) => {
		//编写一段代码，使其实现跳转到Detail组件，且为push跳转 
		//1.push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}/${title}`)

		//2.push跳转+携带search参数
		// this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

		//3.push跳转+携带state参数
		this.props.history.push(`/home/message/detail`, { id, title })

	}

	back = () => {
		this.props.history.goBack()
	}

	forward = () => {
		this.props.history.goForward()
	}

	go = () => {
		this.props.history.go(-2)
	}

	render() {
		const { messageArr } = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj) => {
							return (
								<li key={msgObj.id}>

									{/* 向路由组件传递params参数 */}
									{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递search参数 */}
									{/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

									{/* 向路由组件传递state参数 */}
									<Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>

									&nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
									&nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				<hr />
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

				{/* search参数无需声明接收，正常注册路由即可 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* state参数无需声明接收，正常注册路由即可 */}
				<Route path="/home/message/detail" component={Detail} />

				<button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button>

			</div>
		)
	}
}
