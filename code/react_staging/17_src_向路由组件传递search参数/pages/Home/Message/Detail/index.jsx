import React, { Component } from 'react'
import qs from 'querystring'

const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
	render() {
		console.log(this.props);
		//用search参数的方式，从Message组件传来的数据：id和title 会被保存到Detail组件的props属性中的location里的search里
		//例：search:"?id=01&title=消息1"  是一个字符串
		//我们需要把这个字符串加工成{id:"01",title:"消息1"}

		//需要引入querystring这个库（react已下载好。），简称qs
		//qs身上有两个特别好的方法：		补充：urlencoded编码格式：key1=value1&key2=value2
		//1:qs.stringify()  把一个对象转换成urlencoded编码格式
		//let obj = {name:"Tom",age:18};
		//console.log(qs.stringify(obj))   //name=tom&age=18

		//2：
		//let str = "carName=奔驰&price=199";
		//console.log(qs.parse(str));	//{carName="奔驰",price="199"}			注意199是字符串不是num

		// 接收params参数
		// const {id,title} = this.props.match.params 

		// 接收search参数
		const {search} = this.props.location
		console.log(qs.parse(search));//{?id:"01",title:"消息1"}
		// 多了个?。需要把?去掉，方法有很多，推荐一个简单的：slice()。search是个字符串："?id=01&title=消息1"，先裁掉?在转成对象
		const {id,title} = qs.parse(search.slice(1))

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
