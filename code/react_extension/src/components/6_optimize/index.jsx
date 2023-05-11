import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

	/*
		2023-05-11更新：
		现在的函数式组件里，可以使用React.memo()，应该也是浅比较
		End 2023-05-11更新：

		思考：
			父组件里有一个状态carName，展示在自己身上，同时也传递给子组件。
			情况1：两个组件都要展示carName，父组件通过changeCar修改carName时，两个组件都会输出Parent/Child---render
			情况2：只有父组件自己展示carName，父组件不传递carName，子组件也不读取。当父组件通过changeCar修改carName时，两个组件依然都会输出Parent/Child---render
			情况3：changeCar的this.setState({})里只写一个空对象，让父组件渲染，但其实并未修改任何状态。当父组件通过changeCar修改carName时，两个组件依然都会输出Parent/Child---render
			可见，只要调用了setState，无论父组件的状态修改与否，是否传递给子组件状态，父组件和子组件都会重新渲染
			虽然在代码逻辑上来说，人家这么设计，那这么运行就没有问题，父组件render，子组件就应该也render。
			但有没有方法，当状态没有更新，子组件也没有用到父组件传来的任何东西的情况下，按需渲染呢？
			这就引发了组件优化问题：

			## 6. 组件优化 （也可以看老师可见！）

			### Component的2个问题 

			> 1. 只要执行setState(),即使不改变状态数据, 组件也会重新render() ==> 效率低
			>
			> 2. 只当前组件重新render(), 就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

			### 效率高的做法

			>  只有当组件的state或props数据发生改变时才重新render()

			### 原因

			>  Component中的shouldComponentUpdate()总是返回true，也就是将生命周期时的那个“阀门”！

			### 解决

			办法1: 
			重写shouldComponentUpdate()方法
			比较新旧state或props数据, 如果有变化才返回true, 如果没有返回false

			办法2:  
			使用PureComponent
			PureComponent重写了shouldComponentUpdate(), 只有state或props数据有变化才返回true

			注意: 
			PureComponent只是进行state和props数据的浅比较, 如果只是数据对象内部数据变了, 返回false  
			比如：
			changeCar = () => {
				const obj = this.state
				obj.carName = "迈巴赫"
				this.setState(obj)
			}
			这样的话，点击换车按钮，不会变成迈巴赫！
			因为，我们之前的写法：thi.settState({carName:“迈巴赫”})，传递的是一个新的对象，内存的堆空间里开辟了一个新的地址

			但是！！const obj = this.state只是把之前state的地址赋值给了obj，obj和this.state是同一个对象，即obj === this.state返回true
			而PureComponent只是浅比较，只会对比地址，不会对比里面的内容。
			这也是在React里不推荐使用push()，unshift()等方法的原因，见下面的addStu()

			因此，不要直接修改state数据, 而是要产生新数据(内存地址不一样才行)

			项目中一般使用PureComponent来优化
	*/

	//react已经提供好了，使用PureComponent来替换Component
	//它会自动地帮助你来重写"阀门"里的比较逻辑。相当于自动挡！

	state = { carName: "奔驰c36", stus: ['小张', '小李', '小王'] }

	addStu = () => {
		//错误的方式，小刘无法添加
		//  const {stus} = this.state
		// stus.unshift('小刘')
		// this.setState({stus})    //简写了stus:stus	这个stus还是之前的stus，内存地址没变，PureComponent返回false

		//正确的方式
		const { stus } = this.state
		this.setState({ stus: ['小刘', ...stus] })//是要给新的对象，内存地址不一样，PureComponent返回true
	}

	changeCar = () => {
		// this.setState({});//虚晃一枪，让父组件渲染，但其实并未修改任何状态。
		//原理是只要调用setState父组件就会重新调用render.（现在函数式组件是状态改变重新render ）

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
	//注意子组件的shouldComponentUpdate也要重写，否则子组件依然会被render
	//但如果我的state里不仅仅只有carName呢？如果有几十个还要我一个一个写判断吗？
	//答案是不需要！react已经提供好了，使用PureComponent来替换Component
	//它会自动地帮助你来重写这个"阀门"里的比较逻辑。相当于自动挡！

	render() {
		console.log('Parent---render');
		const { carName } = this.state
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{this.state.stus}&nbsp;
				<span>我的车名字是：{carName}</span><br />
				<button onClick={this.changeCar}>点我换车</button>
				<button onClick={this.addStu}>添加一个小刘</button>
				<Child carName="奥拓" />
				{/* 父组件给子组件传递的永远都是奥托，因此，使用了PureComponent或重写shouldComponentUpdate后，
				只有第一次子组件才会渲染。 */}
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
