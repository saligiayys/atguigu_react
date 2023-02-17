import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'

export default class Count extends Component {
	// state = {count:0,carName:'奔驰c63'};//count已经交给Redux管理了
	state = {carName:'奔驰c63'};//只需留下不需要共享，自己使用的状态即可。
	//索然案例里没有使用carName，但目的是告诉你，可以有自己的状态，需要和别的组件共享的才交给Redux

	//Redux只负责状态的管理。
	//虽然通过count_reducer里的console.log(preState)可以看出状态确实改变了，但Redux默认不会帮你调用render()重新渲染页面。
	//只有在React里，状态修改才会调用render()。
	//因此我们需要某种方式来监听Redux里所保存的状态是否发生了改变。若状态发生了改变，则自己去调用render()
	//方式如下：
	//  componentDidMount(){ //写在这个生命周期钩子里
	// 	监测redux中状态的变化，只要变化，就调用render
	// 	使用store的subscribe()方法，来订阅redux里状态的改变。
	// 	参数是一个回调。只要Redux里的任何一个状态发生了改变，就会调用该回调。
	// 	store.subscribe(()=>{
	// 		//console.log("@");
	// 		//生命周期钩子里的this都是组件的实例对象
	// 		//this.render();//不能直接调用render，必须通过setState
	// 		this.setState({});
	// 		//因为setState操作是合并，因此{}变是啥也不更新，但也会触发，相当于晃了它一下。
	// 		//因为底层是写死的，只要调用setState就修改状态，然后就调用render
	// 	})
	// }
	//但这样写有个问题，如果我有1000各组件，则每个组件里都要写这么一段相同的代码。
	//我可以一劳永逸的把这段代码放在index.js里。
	//把ReactDOM.render(<App/>,document.getElementById('root'))放在store.subscribe()里
	//这样只要Redux里的状态发生任何改变，直接把整个App的render重新调用，App所有的子组件也就都调用render
	//不用担心如果有1000个组件，只有1个组件改变也会导致重新渲染页面的问题，因为React有Diffing算法！

	//加法
	increment = ()=>{
		const {value} = this.selectNumber
		//通知Redux加value。使用store的dispatch()方法
		store.dispatch({type:'increment',data:value*1})//value是字符串，强转成num
		//{type:'increment',data:value*1}就是action对象，只是该案例我们是自己写的，没用到action creator
		//type的值要和reducer里switch的判断对应上
	}
	//减法
	decrement = ()=>{
		const {value} = this.selectNumber
		store.dispatch({type:'decrement',data:value*1})
	}
	//奇数再加
	incrementIfOdd = ()=>{
		const {value} = this.selectNumber
		const count = store.getState()//不能解构赋值，因为getState()方法拿到的就是那个数字
		//当然如果你reducer里返回的是对象，就会变成对象。但这里我们不需要这么麻烦，直接数字即可。
		if(count % 2 !== 0){
			store.dispatch({type:'increment',data:value*1})
		}
	}
	//异步加
	incrementAsync = ()=>{
		const {value} = this.selectNumber
		setTimeout(()=>{
			store.dispatch({type:'increment',data:value*1})
		},500)
	}

	render() {
		return (//store是一个对象，在react里，不能直接输出。需要使用store的getState()方法。拿到的就是那个数字
				//当然如果你reducer里返回的是对象，就会变成对象。但这里我们不需要这么麻烦，直接数字即可。
			<div>
				<h1>：{store.getState()}</h1>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>&nbsp;
				<button onClick={this.increment}>+</button>&nbsp;
				<button onClick={this.decrement}>-</button>&nbsp;
				<button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
				<button onClick={this.incrementAsync}>异步加</button>&nbsp;
			</div>
		)
	}
}
