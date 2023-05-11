import React, { Component } from 'react'

export default class Child extends Component {
	state = {
		// users:[
		// 	{id:'001',name:'tom',age:18},
		// 	{id:'002',name:'jack',age:19},
		// 	{id:'003',name:'peiqi',age:20},
		// ]

		//我们无法保证程序不出错，甚至有时不是你的错，比如后端数据对接有问题，你需要一个数组，后端却传来一个字符串，如下
		//模拟出错。正常的users应该是个数组，下面才可以调用map。
		//出错的原因可能是由于后端人员没有做好数据的对接。（比如应该传来一个数组，但却传来了一个字符串。）
		//我们无法在每个地方都加上判断，判断数据是否正确，服务器运行是否正常等等。
		//我们需要做的是，如果数据正确，则正常展示；如果数据不正确，服务器临时down机等问题，保证正确的组件正常展示，不正确的组件给用户展示一句提示，增加用户体验
		//因此我们就需要用到错误边界。也就是把错误控制在一定范围内，不要让一个子组件的错误导致整个应用都无法正常运行。
		//我们需要在父组件里做一些手脚
		users: 'abc'
	}

	render() {
		return (
			<div>
				<h2>我是Child组件</h2>
				{
					this.state.users.map((userObj) => {
						return <h4 key={userObj.id}>{userObj.name}----{userObj.age}</h4>
					})
				}
			</div>
		)
	}
}