import React, { Component } from 'react'
import Count from './containers/Count' //引入的Count的容器组件
import Person from './containers/Person' //引入的Person的容器组件

export default class App extends Component {

	/*
		打包 就是把React的语法，变成最纯粹的js给浏览器
		npm run build
		然后部署到服务器上运行。
		1.自己写一个服务器
		2.使用serve这个库（注意不是server）能让你以指定的文件夹，快速开启一台服务器。即把这个文件夹作为服务器的根目录。
			全局安装：npm i serve -g
			然后在指定文件目录路径下，在终端里直接输入serve执行
			如果要指定某个文件夹，则 serve 文件夹名	或 serve ./文件夹名
			比如这里：D:\IT\Web\notes\React\code\redux_test>serve build
			点击http://localhost:5000 打开页面

		这样，react在浏览器的那个图标终于变成了蓝色！

		实际工作中，把build这个打包好的静态文件资源交给后端人员来配置到服务器中！
	*/

	render() {
		return (
			<div>
				<Count/>
				<hr/>
				<Person/>
			</div>
		)
	}
}
