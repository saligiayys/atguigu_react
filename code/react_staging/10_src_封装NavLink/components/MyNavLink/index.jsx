import Title from 'antd/lib/skeleton/Title';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


//封装NavLink
export default class MyNavLink extends Component {
	render() {
		const { to, title } = this.props;
		console.log(this.props);//如果使用自闭和标签，没有children这个属性。非闭合标签使用了标签体会自动生成一个children属性，值是你写的标签体内容
		return (
			// <NavLink activeClassName="atguigu" className="list-group-item" to={to}>{title}</NavLink>
			//...this.props 把对象展开，一个一个传给NavLink
			// <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}>{title}</NavLink>
			// 如何我连title都不想接收呢？

			<NavLink activeClassName="atguigu" className="list-group-item" {...this.props} />
			//标签体内容是特殊的属性，...this.props里已经包含了children="Home(或About)"

			/*测试：这样写都可以输出Home组件的名字，因为标签体内容是特殊的属性*/
			/*<NavLink to="/home">Home</NavLink>*/
			/*<NavLink to="/home" children="Home"/>*/
			/* 注意children是预定义的，只要你给children赋值了，react就会识别children，把值渲染到标签体上 */

		)
	}
}
