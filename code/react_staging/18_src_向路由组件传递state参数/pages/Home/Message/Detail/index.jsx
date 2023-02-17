import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [
	{id:'01',content:'你好，中国'},
	{id:'02',content:'你好，尚硅谷'},
	{id:'03',content:'你好，未来的自己'}
]
export default class Detail extends Component {
	render() {
		console.log(this.props);
		//用state参数的方式，从Message组件传来的数据：id和title 会被保存到Detail组件的props属性中的location里的state里
		//state: {id: "01", title: "消息1"} 是一个对象

		//虽然地址栏里没有携带数据，但刷新后页面也不会丢失，参数依然保留。（比如你点击消息3，刷新后还是消息3那个页面）
		//原理：因为我们现在使用的是BrowserRouter，它一直在操作，维护着浏览器的history。
		//也就是你每次向里面了什么传数据它是知道的。因为history对象帮你记录着呢
		//虽然我们是把数据传入到location的state里的，但其实location是在history里的，是history的属性。
		//但如果清除了浏览器的缓存，重新输入这个地址，会报错，提示this.props.location.state是undefined
		//所以无法执行const {id,title} = this.props.location.state这段代码
		//我们可以在后面加上 || {} 意思是：或空对象
		// const {id,title} = this.props.location.state || {}
		//如果有值，我就用；没有值，我就用空对象。这样不会报错，顶多id和title是undefined。
		//当然，这也会导致下面的findResult变成undefined，因此也要给它加上|| {}

		// 接收params参数
		// const {id,title} = this.props.match.params 

		// 接收search参数
		// const {search} = this.props.location
		// const {id,title} = qs.parse(search.slice(1))

		// 接收state参数
		const {id,title} = this.props.location.state || {}

		const findResult = DetailData.find((detailObj)=>{
			return detailObj.id === id
		}) || {}
		return (
			<ul>
				<li>ID:{id}</li>
				<li>TITLE:{title}</li>
				<li>CONTENT:{findResult.content}</li>
			</ul>
		)
	}
}
