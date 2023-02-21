import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

	//请求地址老师已经准备好了：https://api.github.com/search/users?q=xxxxxx
	//只要请求该地址，github就可以返回对应关键词的用户信息。是get请求。xxx就是你的关键词
	//github后端已经通过在后端配置cors响应头解决了跨域问题，不需要我们处理。
	//Tips:如果github不解决跨域，则意味着只有他自己家的网站才能访问次api，其他编码人员就无法使用了。而这个api创建的初心就是方便别人访问，所以github解决了跨域。以后自己开发api也要考虑这点，自家用不允许跨域，开源则允许跨域
	//但是真正上线的网站，很少有用cors去解决跨域，因为这意味着几乎所有网站都能访问你了。
	//注意，如果频繁请求，可能会导致github拒绝你请求的情况。
	//如何解决。老师准备了一个服务器，端口为5000。里面有两个接口。
	//接口1：github返回的真实数据  接口2：有朝一日github禁掉了接口1，使用老师准备的模拟数据。
	//因为该案例的目的是练习axios，而不是搜索。
	//老师准备的服务器在react全家桶->05_所需服务器。但注意，老师的服务器没有解决跨域问题，因为我们要在这个案例里复习代理，需要添加一个setupProxy.js文件进行配置
	//注意，github不存在跨域问题，这里自己写服务器的原因是以防万一github的api拒绝你的请求，创建了一个模拟的服务器，也就是说，不存在跨域问题的话，不需要配置代理。
	//启动服务器指令：npm start 或 node server.js
	//接口1：请求github真实数据请访问：http://localhost:5000/search/users
	//接口2：请求本地模拟数据请访问：http://localhost:5000/search/users2
	//http://localhost:5000/search/users2?q=123输入到浏览器地址栏，可以查看到json数据
	//我们可以看到，真实数据每一条item对象的属性有很多，但虚拟的数据只有四条。因为我们这里只用这四条即可
	//它们分别是用户名login，主页地址html_url，头像avatar_url，以及id

	//同TodoList案例，以目前的知识不能实现兄弟组件之间的交互，需要Search把搜索到的数据交给App，再由App转交给List

	search = () => {
		//获取用户的输入
		//方式一：普通解构赋值
		// const {value} = this.keyWordElement;
		//方式二：
		//(连续解构赋值+重命名) 这里把value改名成了keyWord
		//keyWordElement是ref里自己定义的名字。
		const { keyWordElement: { value: keyWord } } = this
		console.log(keyWord);
		//keyWordElement不能被输出，只是书写的过程，并没有被定义
		/*
			补充：let obj = {a:{b:{c}}}  console.log(obj.a.b.c)
				  const {a:{b:{c}}} console.log(c)
			*/

		//发送请求前通知App更新状态：去掉欢迎词，展示loading....
		//在讲state时说过，setState是一种合并，不是替换。同名的覆盖，不同名的依然保留
		//因此这里只需要写需要被修改的isFirst和isLoading即可，其他的保持原样
		this.props.updateAppState({ isFirst: false, isLoading: true })
		//发送网络请求:该请求是get请求
		//扩展，如果你本身就是站在3000端口上，向3000端口发送请求，则可以省略前面的http://localhost:3000  所以cooper young不需要写端口，从./src开始写就行？(因为没有配入口文件，所以需要从./src开始)
		// axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
		//真实数据users，访问被拒绝就用users2
		axios.get(`/api1/search/users?q=${keyWord}`).then(
		//虚拟数据users2
		// axios.get(`/api1/search/users2?q=${keyWord}`).then(
			// response => 
			response => {
				// this.props.saveUsers(response.data.items);
				//请求成功后通知App更新状态:去掉loading.....，保存数据
				this.props.updateAppState({ isLoading: false, users: response.data.items })
			},
			error => {
				//请求失败后通知App更新状态:去掉loading...，展示错误信息
				this.props.updateAppState({ isLoading: false, err: error.message })//或者手写错误信息"请求出错。。。"
				//error是错误对象。
				//在react里，object对象，是不能直接作为react的孩子的，如果直接err:error会报错，因此要使用error这个错误对象的属性message
				//注意这里说的不是控制台，而是List组件获得了这些数据在展示时，是由react展示的，届时会出这个错误
			}
		)
	}

	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">搜索github用户</h3>
				<div>
					<input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
					<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
