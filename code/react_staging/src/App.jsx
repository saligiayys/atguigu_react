import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	//网络请求。通过axios发送ajax请求

	//先yarn add axios
	//然后引入axios

	//启动服务器：
	//找到06其他里的测试代理服务器。
	//输入命令 node server1.js

	getStudentData = ()=>{
		//说一下跨域的问题。可以发送请求，但数据回不来。如何证明？服务器端显示：有人请求服务器1
		//因为ajax引擎的存在，允许客户端3000端口向服务器5000端口发送请求，但不允许返回的数据被3000端口接收
		//如何解决？在react脚手架里，通过配置代理来解决。
		//比如客户端端口是3000，服务器是5000，需要一个中间人(代理)，且端口和客户端一样是3000。
		//也就是3000端口开着react的脚手架，同时也开着一个代理(一个微小的服务器)
		//因此客户端可以向代理发送请求，代理转发给服务器，服务器把数据发给代理(代理没有ajax引擎因此可以接收)，代理再发给客户端。
		//因此不存在跨域问题，同源策略不会限制。
		//相当于你自己办不到的事，你托别人给办了
		//如何开启代理？react里有两种方式
		//方式一：在package.json里添加一个:"proxy":"http://localhost:5000"
		//注意不要写5000/students，这样就写死了，万一还有teacher，school啥的呢？
		//因为修改了package.json文件，需要重启脚手架
		//同时要把这里url里的端口号改成3000。因为这里是客户端，要给代理(也是3000)发，然后又代理发送给服务器(5000)
		//但方式一不太完美。因为"http://localhost:5000"的意思是，只要3000没有的资源，就去5000找，相当于写死了，只能写一个代理。
		// 而我们除了有server1还有server2。因此引申出了方式二，见：setupProxy.js。如果需要向多个服务器请求数据，需要配置多个代理，就不能在package.json里配置了。记得删除方式一的代理！
		//注意这个文件名不能改，react底层会找这个文件。
		//node server2.js开启第二个服务器
		//ps:在浏览器地址栏输入一个网址回车就是get请求。可以借助该特点来测试服务器的接口是否成功可用。

		//方式一相关：
		// axios.get('http://localhost:5000').then(
		// axios.get('http://localhost:3000/index.html').then(
		//虽然代理中，配置了向端口5000发送命令的代码，但如果3000端口下有你要找的文件，比如index.html，则不需要进行转发。因此5000端口那边不会显示：有人请求服务器1
		//因为，其实public文件目录，就是3000端口这台react帮你开启的服务器的根目录

		// axios.get('http://localhost:3000/index2.html').then(
		//但因为没有index2.html，因此会转发给5000，但是5000也没有，所以会报404，但5000端口那边依然会显示：有人请求服务器1

		// axios.get('http://localhost:3000').then(

		//方式二相关：
		// axios.get('http://localhost:3000/students').then(//这么些不会请求代理，因为没有/api1
		axios.get('http://localhost:3000/api1/students').then(//见到/api1转发给5000。注意/api1一定要写在3000的后面
			response => {console.log('成功了',response.data);},//对于axios，服务器返回的数据是在data里
			error => {console.log('失败了',error);}
		)
	}

	getCarData = ()=>{
		axios.get('http://localhost:3000/api2/cars').then(//见到/api2转发给5001
			response => {console.log('成功了',response.data);},
			error => {console.log('失败了',error);}
		)
	}

	render() {
		return (
			<div>
				<button onClick={this.getStudentData}>点我获取学生数据</button>
				<button onClick={this.getCarData}>点我获取汽车数据</button>
			</div>
		)
	}
}
