import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'

//优化：
//使用react-redux不再需要store.subscribe监测。
//这也归功于connect()()，使容器组件自动拥有了监测redux里状态改变的能力。
//这就是之前说为啥不自己写容器组件，而是用connect的原因之一。因为自己写的容器组件不具备这些能力。

//优化：如果App里有多个容器，不需要一个一个的传入store。使用Provider组件进行批量统一添加store
//即把所有容器都需要的store，都统一交给Provider。Provider可以自动分析整个应用里的容器组件，把store精准的传给每一个需要store的容器组件。
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)