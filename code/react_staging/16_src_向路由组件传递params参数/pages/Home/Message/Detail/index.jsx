import React, { Component } from 'react'

//正常情况下，是接收消息的id后，向后台的服务器获取数据，但因为我们这里没有服务器，因此在此定义一个模拟的数据。
//只要从Message组件里得到了消息的id，就可以在这里匹配上对应的content
const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {

	render() {
		console.log(this.props);
		//用params参数的方式，从Message组件传来的数据：id和title 会被保存到Detail组件的props属性中的match里的params里
		//例：params:{id:"01",title:"消息1"}  是一个对象

		// 接收params参数
		const {id,title} = this.props.match.params

		//使用find方法过滤数据。
		//弹幕：find和filter的区别是，find满足条件就不找了 filter会把所有的都找一遍 ，这里find比filter效率高
		// filter返回的是一个数组(detailObj组成的数组)，而find返回的是一个元素（detailObj）
		//弹幕：用哪个方法都行，for 或者 map 只在这里是没有 find 方便
		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}
}
