/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from './reducers/person'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

//当只有一个Count组件时，redux只保存了一个状态：数字0
//当有有多个组件需要用到redux时，redux需要通过一个总的状态对象来保存每个组件里不同的状态对象。（不使用数组的原因还是因为要使用index）
//这个案例里，redux保存的就是Count组件的求和数值，以及Person组件里保存了很多人信息的数组
//需要从redux上引入combineReducers函数，参数是一个对象，对象里面是你要用到的所有reducers
//combineReducers调用时传入的对象，就是redux帮我们保存的总的状态对象。
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
	he:countReducer,//countReducer返回的是一个数值。初始值是0
	rens:personReducer//personReducer返回的是一个保存person信息的数组。初始值是[{id:'001',name:'tom',age:18}]
})

//暴露store
export default createStore(allReducer,applyMiddleware(thunk))