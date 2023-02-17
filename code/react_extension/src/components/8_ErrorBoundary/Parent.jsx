import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

	//错误边界。错误边界：用来捕获后代组件错误，渲染出备用页面。不要让一个子组件的错误导致整个应用都无法正常运行。使错误被控制在一定范围之内。
	//注意：使用错误边界，需要在父组件里进行配置，而不是子组件里。或者说，应该在容易发生错误的那个组件的父组件上做手脚。
	// 只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误
	// 也就是如果是一个自定义的函数出错了，不会捕获。

	//但是错误边界只适用于生产环境，不能用于开发环境。
	//所以在这里你通过WebStorm或VsCode开启后会发现，它会先提示错误，然后马上整个应用又报错了，因为我们是开发人员，不是用户
	//只有经过build打包，真正上线后，才会正常执行我们想要的效果。

	//弹幕：如果有多个子组件需要判断是否出错，可以定义一个错误边界组件。
	//在需要使用的组件用错误边界组件包裹一下就好，不管是什么类型的组件都可以

	state = {
		hasError:'' //提前定义好这个状态，用于标识子组件是否产生错误
	}

	//当Parent的子组件出现任何报错时候，就会触发getDerivedStateFromError调用，并携带错误信息error
	static getDerivedStateFromError(error){//名称直译：从错误获取一个衍生的状态
		console.log('@@@',error);
		return {hasError:error}//返回一个状态对象，更新状态。
		//因此需要在下面先判断是否有错误，有错误提示用户，没错误正常渲染Child。
	}

	//这个也属于生命周期钩子中的一个，但不常见。
	//只有在组件渲染的过程中，由于子组件出现了问题，引发了一些错误，才会调用componentDidCatch()
	//我们一般在这个钩子里统计错误次数，发送给后台。
	//弹幕：戏称加班函数
	componentDidCatch(){
		console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决');
	}

	render() {
		return (
			<div>
				<h2>我是Parent组件</h2>
				{/*先判断是否有错误，有错误提示用户，没错误正常渲染Child。*/}
				{this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
			</div>
		)
	}
}
