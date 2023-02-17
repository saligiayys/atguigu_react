import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

	search = ()=>{
		//获取用户的输入(连续解构赋值+重命名)
		const {keyWordElement:{value:keyWord}} = this
		//不再需要通知App调用updateAppState，直接发布消息给List，注意在上面引入PubSub
		//发送请求前通知List更新状态。消息名 要和List里订阅的消息名对应
		//参数一：消息名，参数二：数据
		// this.props.updateAppState({isFirst:false,isLoading:true});
		PubSub.publish('atguigu',{isFirst:false,isLoading:true})
		//发送网络请求
		axios.get(`/api1/search/users?q=${keyWord}`).then(
			response => {
				//请求成功后通知List更新状态
				// this.props.updateAppState({isLoading:false,users:response.data.items})
				PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
			},
			error => {
				//请求失败后通知App更新状态
				// this.props.updateAppState({isLoading:false,err:error.message});
				PubSub.publish('atguigu',{isLoading:false,err:error.message})
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
