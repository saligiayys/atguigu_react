import React, { Component } from 'react'
import Count from './containers/Count' //引入的Count的容器组件
import Person from './containers/Person' //引入的Person的容器组件

export default class App extends Component {

	/*
	最终版：
		相比8_src_react-redux_开发者工具，新在reducers目录下添加了用于统一汇总reducers的文件，集体引入到store里
		其他的就是修改了不合理的命名，比如jia。
		把太长的函数名缩短了，并触发对象的简写。
		补全了注释

		实际开发中，Redux可能已经被别人写好了，你需要自己看如何使用，应用到自己的组件上。
		
		之前我们使用npm start打开的是开发环境的服务器。
		项目完成后，我们需要把写好的App部署到生产环境的服务器上。
		我们需要把App打包，也就是把我们的项目，变成最纯粹的html，css和js给浏览器
		npm run build
		这个命令会把React语法转换成变成最纯粹的html，css和js，并且将其高度压缩
		我们需要把这个文件部署到服务器上运行。

		两种方式创建服务器：
		1.自己写一个服务器(正式上线)
		2.（用于测试）使用serve这个库（注意不是server）能让你以指定的文件夹，快速开启一台服务器。即把这个文件夹作为服务器的根目录。
			全局安装：npm i serve -g
			然后在指定文件目录路径下，在终端里直接输入serve执行
			如果要指定某个文件夹，则 serve 文件夹名	或 serve ./文件夹名
			比如这里：D:\IT\Web\notes\React\code\redux_test>serve build
			点击http://localhost:5000 打开页面。（也有可能是其他端口）

		这样，我们部署到了生产环境的服务器上，react在浏览器的那个图标终于变成了蓝色！

		实际工作中，把build这个打包好的静态文件资源交给后端人员来配置到服务器中，serve只是用于测试！
	*/

	render() {
		return (
			<div>
				<Count />
				<hr />
				<Person />
			</div>
		)
	}
}
