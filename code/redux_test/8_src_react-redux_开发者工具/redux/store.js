/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Count组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	he:countReducer,
	rens:personReducer
})

//暴露store
//引入composeWithDevTools之前
// export default createStore(allReducer,applyMiddleware(thunk))
//引入composeWithDevTools之后
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))

//在浏览器里安装Redux DevTools
//同时安装yarn add redux-devtools-extension，否则上面的工具无法使用
//然后在redux的store.js里引入redux-devtools-extension，取出composeWithDevTools函数
//把composeWithDevTools函数作为creatStore的第二个参数传入。如果之前creatStore已经有第二个参数(用于异步action)，
//则把之前的第二个参数，作为composeWithDevTools的参数传入。
//至此，Redux DevTools才可以使用，图标才被点亮，且f12里多了一个Redux选项卡。