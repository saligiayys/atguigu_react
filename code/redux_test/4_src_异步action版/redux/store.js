/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//引入redux-thunk，用于支持异步action。用的是默认暴露。
//同时还要在上面redux里引入applyMiddleware。且必须放在createStore的第二个参数
import thunk from 'redux-thunk'
//暴露store
export default createStore(countReducer,applyMiddleware(thunk))
//applyMiddleware是一个函数，需要调用，且传入thunk作为参数。

//虽然异步action的值是函数，但store只认可同步action。此时就需要借助redux-thunk来和store“沟通”
//yarn add redux-thunk