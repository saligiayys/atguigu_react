import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

//对于BootStrap这种第三方的样式库，最好放在public里。然后在public里的index.html引入。
//该案例拆分了两个组件，List和Search
//由于老师准备的App.css其实都是给List用的，所以移动到了List组件下，因此这里没有App.css了，也就不用引入

export default class App extends Component {
	////同TodoList案例，以目前的只是不能实现兄弟组件之间的交互，需要Search把搜索到的数据交给App，再由App转交给List
	state = { //初始化状态
		users:[], //users初始值为空数组

		//除了users，List里还需要展示欢迎信息，提示用户正在加载，出错等内容。
		isFirst:true, //是否为第一次打开页面。第一次点击搜索按钮后，改为false
		isLoading:false,//标识是否处于加载中。搜索时为true，数据一旦得到马上改回false
		err:'',//存储请求相关的错误信息。
	}

	// saveUsers = (users) => {
	// 	this.setState({users});//简写：users:users
	// };
	//后来由于多了isFirst，isLoading，err
	//我们需要写多个方法。但其实这些方法都是再操作state。因此为了不写这么多，可以统一成一个方法：updateAppState，更有通用性。
	//updateAppState：更新App的state
	updateAppState = (stateObj)=>{//直接接收一个状态对象，setState里不用再写{}了
		this.setState(stateObj)//在讲state时说过，setState是一种合并，不是替换。同名的覆盖，不同名的依然保留
		//弹幕：有一个遗留bug，就是出错了的话，没有清空之前的错误信息。
	}

	render() {
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
			//...this.state批量传递state
		)
	}
}
