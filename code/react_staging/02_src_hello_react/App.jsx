//创建“外壳”组件App，它囊括这其他所有自定义组件
//写法一：对应extends React.Component
//第一个React只是个名字，可以换，但一般习惯不换。
// import React from 'react'

// 写法二：对应extends Component，可以省略React.。
import React,{Component} from 'react'
//注意，这样不是解构赋值const {Component} = React，而是es6的新模块化语法 分别暴露。
//也就是react这个文件里，使用了多种暴露的形式！
//ES6模块化语法复习，见module.js文件

import Hello from './components/Hello'
import Welcome from './components/Welcome'

// 创建组件，这里使用的是类式组件
// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				Hello, React! 
// 			</div>
// 		);
// 	}
// }
//
//暴露组件（默认暴露）
// export default App;
//但一般不在App里直接写Hello, React!，而是建立一个组件，比如Hello组件，然后把这个组件放在这里。除非你的app特别简单

//创建并暴露App组件。这里使用的是类式组件
export default class App extends Component{
	render(){
		return (
			<div>
				{/* 样式注意{{}} */}
				<h1 style={{fontSize:'40px', backgroundColor:'green'}}>App...</h1>
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}
//不需要再单独写一遍export default App;，可以在上面一起写。

//组件全部是开头大写，App, Hello, Welcome
//此外，有时候我们还会需要外部的js文件，比如专门用来存放一些函数，用于处理业务的js代码。
//除了首写字母大写可以区分是组件还是普通js文件，一般我们还会把组件的后缀改成.jsx。
//App.js或App.jsx都可以，因为他地位最高
