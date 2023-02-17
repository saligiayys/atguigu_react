import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {
	/*
		发送ajax请求的几种方式：
		xhr: const xhr = new XMLHttpRequest()		最原始
			jQuery: $.get()		可能产生回调地狱
			axios:	可以解决回调地狱，因为是promise风格。ps：前端必须掌握好promise
			但jQuery和axios都是对xhr的封装。（服务器端的axios不是对xhr的封装，因为服务器端没有xhr，而使用的http）
			且都需要下载，是第三方对xhr的封装

		fetch：另一种发送ajax请求的方式，和xhr并列。
			是window内置的，优势在于不是第三方库，不需要下载。它也是promise风格的
			但它其实并不好用，实际开发用的也不多。。。。但需要了解
			因为兼容性不好，老版本浏览器不支持。

		所以目前为止，还是axios用的多

		面试题：如果不借助xhr还能怎么发送ajax请求？用fetch，因为axios原理依然是xhr


	*/

	render() {
		return (
			<div className="container">
				<Search/>
				<List/>
			</div>
		)
	}
}
