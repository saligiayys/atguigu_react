import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

	state = { //初始化状态
		users:[], //users初始值为数组
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息
	} 

	//List组件订阅消息。记得在上面引入PubSub
	//在componentDidMount钩子里，也就是当这个组件一旦放在页面上，就开始订阅消息。
	//这个钩子一般做一些初始化的工作，比如开启定时器，订阅消息等
	componentDidMount(){
		//subscribe(消息的名字，回调函数(消息的名字，数据))。如果有人发布了对应你消息名字的消息，就会触发这个回调函数。
		//这个回调函数也有两个参数，消息的名字和数据。
		//但大部分人觉着这个设计不太好，因为我订阅的什么消息名我是知道的，不需要再在回调里传一遍消息名了，直接把数据给我不就行了吗
		//但因为人家就是这么设计的，函数里的参数以及其顺序不能变，因此我们可以使用_充当一个占位符。
		//token，相当于setTimeout的id，用于最后取消订阅使用。
		this.token = PubSub.subscribe('atguigu',(_,stateObj)=>{
			// console.log(stateObj);
			this.setState(stateObj)
			//组件已挂载就开始订阅消息。
			//只要有人发送消息名为atguigu的消息，该回调函数就会执行，更新状态对象，使用的数据就是Search发布来的
		})
	}

	//在componentWillUnmount钩子里取消订阅
	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}

	render() {
		//不再从props取，而是直接从自己的state里取
		// const {users,isFirst,isLoading,err} = this.props;
		const {users,isFirst,isLoading,err} = this.state;
		return (
			<div className="row">
				{
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
