import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
	//react已经提供好了，使用PureComponent来替换Component
	//它会自动地帮助你来重写"阀门"里的比较逻辑。相当于自动挡！

	state = {carName:"奔驰c36",stus:['小张','小李','小王']}

	addStu = ()=>{
		//错误的方式，小刘无法添加
		//  const {stus} = this.state
		// stus.unshift('小刘')
		// this.setState({stus})    //简写了stus:stus	这个stus还是之前的stus

		//正确的方式
		const {stus} = this.state
		this.setState({stus:['小刘',...stus]})
	}

	changeCar = ()=>{
		//使用PureComponent的注意点
		//正确的方式
		//this.setState({carName:'迈巴赫'})
		//注意{carName:'迈巴赫'}使用字面量的方式定义的新对象，在堆空间中和上面的{carName:"奔驰"}不是一个对象，地址是不同的

		//错误的方式
		const obj = this.state//而这里进行的是地址的传递
		obj.carName = '迈巴赫'
		console.log(obj === this.state);//即obj和this.state是一个对象。
		this.setState(obj)//这里无法修改
		//PureComponent只是做了一个浅对比，只对比了地址是否一样。所以obj和this.state是一个对象，阀门直接返回false关闭。
		//之前在讲纯函数的时候也说过这个相关的问题。不建议用push啊，unshift啊之类的方法。
	}

	// 正是因为这个“阀门”默认一直是true，才会导致即使只要调用setState()就会重新render，即使没有修改任何数据
	// 这个钩子可以接收两个参数：nextProps和nextState。在此案例中，App没有通过props传给Parent数据，因此这里只关注state。
	//  shouldComponentUpdate(nextProps,nextState){
	// 	// console.log(this.props,this.state); //目前的props和state
	// 	// console.log(nextProps,nextState); //接下要变化的目标props，目标state
	//  我们可以通过判断当前的props和state和要变成的props和state是否相等，来决定要打开还是关闭这个阀门。
	//  相等关闭false，不相等才打开true，所以要取反
	//  当然此案例这里没有props所以仅判断state
	// 	return !this.state.carName === nextState.carName
	// }
	//但如果我的state里不仅仅只有carName呢？如果有几十个还要我一个一个写判断吗？
	//答案是不需要！react已经提供好了，使用PureComponent来替换Component
	//它会自动地帮助你来重写这个"阀门"里的比较逻辑。相当于自动挡！

	render() {
		console.log('Parent---render');
		const {carName} = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br/>
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
				<Child carName="奥拓"/>
			</div>
		)
	}
}

class Child extends PureComponent {

	//在该案例中，Child没有state，所以这里只关注props
	/* shouldComponentUpdate(nextProps,nextState){
		console.log(this.props,this.state); //目前的props和state
		console.log(nextProps,nextState); //接下要变化的目标props，目标state
		//判断目前的props和要变成的props是否相当，来决定是否打开阀门
		// 相等关闭false，不相等才打开true，所以要取反
		return !this.props.carName === nextProps.carName
	} */

	render() {
		console.log('Child---render');
		return (
			<div className="child">
				<h3>我是Child组件</h3>
				<span>我接到的车是：{this.props.carName}</span>
			</div>
		)
	}
}
