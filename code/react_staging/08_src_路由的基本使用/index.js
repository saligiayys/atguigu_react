//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入BrowserRoute/HashRouter
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'

// 先看react全家桶资料-》其他-》前端路由的基石！

/*
react-router是react的一个插件库。
有三种实现方式：
1.WEB
2.Native
3.Anywhere

我们这里学习的是WEB，所以叫react-router-dom

这里学的是react router 5
yarn add react-router-dom

后来尚硅谷更新了react router 6
所以现在安装react router 5的话，需要以下命令：
npm i react-routerdom@5
视频127集开始讲的，建议先把5学完


路由的工作原理：
1.点击导航链接，引起浏览器的路径变化。
2.路径变化被前端路由器检测到，进行组件的匹配，从而展示对应组件的内容。
此过程不需要发送网络请求。
而按照以前a标签那种方式实现页面跳转的话(锚点不需要)，是需要发送网络请求的。
*/

ReactDOM.render(

	//一劳永逸的办法，是用BrowserRouter标签包裹住index.js里的App组件！！！
	// HashRouter路径：http://localhost:3000/home#/about
	// BrowserRouter路径：http://localhost:3000/about
	<HashRouter>
		{/* <BrowserRouter> */}
		<App />
		{/* </BrowserRouter>, */}
	</HashRouter>,
	document.getElementById('root')
)