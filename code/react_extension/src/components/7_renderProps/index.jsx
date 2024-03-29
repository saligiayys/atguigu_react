import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
	//render props，把一个组件动态地放在某个组件的指定位置上，且还可以传递数据。

	render() {
		return (
			<div className="parent">
				<h3>我是Parent组件</h3>
				{/*情况1：把组件A写成有开始和结束标签的形式*/}
				{/*组件标签里的标签体内容，需要在A组件里通过this.props.children获取并使用，
				之前在讲路由NavLink时提到过这种写法。标签体内容是一个特殊的标签属性，属性名为children*/}
				{/* 但这个Hello仍然需要在A组件里接收，并在A组件内部指定位置展示，不会在这里直接展示。写这里相当于只是存放了Hello */}
				{/*<A>Hello！</A>*/}

				{/*情况2*/}
				{/*把B组件作为了A组件的标签体内容*/}
				{/*这种情况，也可以在A组件里通过this.props.children的方式获取并使用
				如果A组件内部没有调用this.props.children，B子组件无法被展示，B组件只是相当于被保存在了A组件的children属性里
				如果A组件内部调用了，则可以正常显示B组件*/}
				{/*<A>*/}
				{/*	<B/>*/}
				{/*</A>*/}

				{/*因此，这是另一种使组件之间产生父子关系的方式！！也就是把一个组件作为另外一个组件的标签体内容
				特点是，A组件的函数里，没有用到任何B组件的标签。乍一看以为A和B只是兄弟
				该方式适合最开始不能确定A和B的关系的情况！也就是可能是先写的下面的A和B，回过头来突然觉得A应该是B的父组件的情况*/}

				{/*但用这种方式，A如何通过props给B传递数据呢？如下*/}
				{/* 错误的方式：这个this不是A!而是Parent，除非你把name写在Parent里 */}
				{/* <A>
					<B name={this.state} />
				</A> */}

				{/* 正确的方式： */}
				{/*<A render={()=><B/>}/>*/}
				{/*意思是Parent组件给子组件A组件传了一个标签属性，名为render，值为一个函数，该函数调用的返回值是B组件，作为A的子组件。
				因此在A组件里，需要通过props来调用：this.props.render()。因为是函数，要调用就还要加一对()
				其实就是调用了render这个函数，返回了B。函数名render可以改*/}

				{/*如果希望A给B传递数据，name，则在A组件里调用的时候传入name作为参数，这里接收，然后传给B*/}
				{/*<A render={(name)=><B name={name}/>}/>*/}
				{/*相当于最开始没学习消息订阅时，组件之间通信的方式一样，使用了函数传参。
				由A的父组件Parent给A传递一个函数，A把要传给B的数据放在形参里，通过函数的形式传给B*/}
				{/*这样写的好处是灵活！相当于vue的插槽技术*/}

				{/*相当于我在A组件里通过{this.props.render(name)}预留了一个位置将来要传来一个组件，但放谁最开始还不确定。
				我可以通过调用render(不是组件里负责渲染的那个的render。而是标签属性的render,这个名字可以随便起，因为本质就是props传参，但一般叫render，因为该函数返回一个组件，别人看到就明白这里预留了一个位置，未来这里要渲染一个组件)，
				在这里我可以随意的控制想把谁放在这就把谁放在这。比如我可以把之前做的求和案例直接放在这里
				在上面引入，名字是C。*/}
				<A render={(name) => <C name={name} />} />
				{/*因为在实际开发中，可能是不同的人在开发各自地组件。如果你把C直接写在A组件里，有一天你想换成D，还得麻烦当时写A组件的那个人。
				而这样做，可以让写A组件的人在最开始直接预留出一个位置，以后我想放什么不需要麻烦这个人，且可以携带数据。*/}
			</div>
		)
	}
}

class A extends Component {
	state = { name: 'tom' }
	render() {
		console.log(this.props);
		const { name } = this.state
		return (
			<div className="a">
				<h3>我是A组件</h3>
				{/*{this.props.children}*/}
				{/* 标签体内容是一个特殊的标签属性，属性名为children。
				 	写了这句代码才能展示Hello，或B组件
				 */}

				{/*父组件Parent传来的render函数，这里相当于一个预留的区域
				 在Parent里传入B组件，就相当于把B组件放在这，传入C就相当于把C放在这，非常灵活
				*/}
				{this.props.render(name)}
			</div>
		)
	}
}

class B extends Component {
	render() {
		console.log('B--render');
		return (
			<div className="b">
				<h3>我是B组件,{this.props.name}</h3>
			</div>
		)
	}
}
