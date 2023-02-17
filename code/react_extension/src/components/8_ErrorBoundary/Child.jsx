import React, { Component } from 'react'

export default class Child extends Component {
	state = {
		// users:[
		// 	{id:'001',name:'tom',age:18},
		// 	{id:'002',name:'jack',age:19},
		// 	{id:'003',name:'peiqi',age:20},
		// ]

		//模拟出错。正常的users应该是个数组，下面才可以调用map。
		//出错的原因可能是由于后端人员没有做好数据的对接。（比如应该传来一个数组，但却传来了一个字符串。）
		users:'abc'
	}

	render() {
		return (
			<div>
				<h2>我是Child组件</h2>
				{
					this.state.users.map((userObj)=>{
						return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
					})
				}
			</div>
		)
	}
}