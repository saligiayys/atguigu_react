import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
//withRouter首字母小写，不是组件，是一个函数

class Header extends Component {
	//Header是一般组件
	//一般组件没有history这个属性。如果不传props，一般组件一开始的props是一个空对象{}			ps:在vue里，vue的实例对象身上都有这些方法，不区分一般组件还是路由组件。
	//因此不能直接调用goBack()等方法，因为history是undefined
	//我们需要使用withRouter，它是一个函数
	//使用方法在最下面
	//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
	//withRouter的返回值是一个新组件
	//它是专门用于解决在一般组件里使用路由组件api的问题的。很常用

	back = ()=>{
		this.props.history.goBack()
	}

	forward = ()=>{
		this.props.history.goForward()
	}

	go = ()=>{
		this.props.history.go(-2)
	}

	render() {
		console.log('Header组件收到的props是',this.props);
		//由withRouter加工后，Header组件也具有了路由组件所具有的属性和方法。

		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>回退</button>&nbsp;
				<button onClick={this.forward}>前进</button>&nbsp;
				<button onClick={this.go}>go</button>
			</div>
		)
	}
}

export default withRouter(Header)
//withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
//withRouter的返回值是一个新组件
