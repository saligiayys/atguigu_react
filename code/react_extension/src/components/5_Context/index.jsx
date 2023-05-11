import React, { Component } from 'react'
import './index.css'

//2023-05-10复习：
//(随着Hooks的流行，现在使用的时useContext()这个钩子！)
//弹幕：现在useContext() + useReducer()可以平替Redux

//创建Context上下文对象 
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

//需求，组件A把username和age传递给后代组件C
//虽然可以通过B的props传递给组件C，但如果我有10个组件呢？还要每个组件都接一下props传给后代吗？
//再者，如果B组件不用username和age呢？虽然可以让B组件只负责接收，但不使用，也比较麻烦，如果有10层呢？这样太麻烦！

//我们可以使用context这个属性。该属性也是组件实例对象的属性，和state,props等这些在一起。专门用于祖组件和后代组件之间的通信。(父子之间也可以用，但props更简单)
//API: const XxxContext = React.creatContext()
//XxxContext必须放在ABC都能访问到的位置。放在了最上面的第5行。有点像Redux，但比Redux简单得多。A把数据放在一个公共的区域，C可以从里面取出来。
//弹幕：如果后代组件不和组件A在同一文件里，组件A只需要把MyCoutext单独暴露出去即可。如果很多组件定义了不同的context，可以集中写到一个文件里
//首字母是大写，因为可能需要通过<XxxContext.Provider>的方式，而组件标签要大写。或者像上面那样先提前把Provider组件取出来
//这一点也和Redux的Provider类似，让所有组件都可以得到指定数据
//传递数据的方式<Provider value={{username,age}}>
//这样一来，B组件以及C组件就都可以接收这些数据了。但需要用static contextType(类式组件)或<Consumer>(函数式组件)声明才可以使用(也就是谁用谁声明)。具体看课件
//这些数据都保存在组件实例对象的context属性上，this.context

//注意：开发中一般不用context，而使用他来封装react插件。

export default class A extends Component {

	state = { username: 'tom', age: 18 }

	render() {
		const { username, age } = this.state
		return (
			<div className="parent">
				<h3>我是A组件</h3>
				<h4>我的用户名是:{username}</h4>
				{/*通过Provider传递，属性名必须是value，否则报错*/}
				<Provider value={{ username, age }}>
					{/*上面简写了，原来是：{{username:username,age:age}}*/}
					<B />
				</Provider>
			</div>
		)
	}
}

class B extends Component {
	render() {
		return (
			<div className="child">
				<h3>我是B组件</h3>
				<C />
			</div>
		)
	}
}

//C组件用类写的情况
//此声明接收的方式只适用于类式组件
// class C extends Component {
// 	//类式组件声明接收context，必须是静态属性contextType(底层写好的！不能改名)，  MyContext和第5行的MyContext对应。只要写了这行代码，就可以收到context!
// 	static contextType = MyContext
// 	render() {
// 		const { username, age } = this.context
// 		return (
// 			<div className="grand">
// 				<h3>我是C组件</h3>
// 				<h4>我从A组件接收到的用户名:{username},年龄是{age}！</h4>
// 			</div>
// 		)
// 	}
// }


//C组件用函数写的情况
//声明接收需要用到的Consumer组件，在上面的MyContext里引入
//在Consumer标签里直接写函数，该函数会接受一个参数value，就是上面A组件的Provider传来的。
//该方式既适用于函数式组件，也适用于类式组件
function C() {
	return (
		<div className="grand">
			<h3>我是C组件</h3>
			<h4>我从A组件接收到的用户名:
				<Consumer>
					{value => `${value.username},年龄是${value.age}`}
					{/* 注意用的是模板字符串 */}
				</Consumer>
			</h4>
		</div>
	)
}