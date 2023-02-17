import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
	render() {
		// console.log(this.props);
		return (//...this.props 把对象展开，一个一个传给NavLink
			<NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
			//标签体内容是特殊的属性，...this.props里已经包含了children="Home(或About)"

		)
	}
}
