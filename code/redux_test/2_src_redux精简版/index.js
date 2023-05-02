import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App/>,document.getElementById('root'))

//只要redux里的状态发生变化，重新调用整个App组件
//Dom有diff算法，不会导致整个页面刷新，只会刷新需要的。
store.subscribe(()=>{
	ReactDOM.render(<App/>,document.getElementById('root'))
})