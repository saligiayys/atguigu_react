/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'
// import store from "./store";

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})

//异步action，就是指action的值为函数。因为只有函数才能开启异步任务呀！比如定时器
//异步action中一般都会调用同步action。
//异步action不是必须要用的。看你的需要，也可以像之前似的，还在组件里进行异步操作。
export const createIncrementAsyncAction = (data,time) => {
	// return ()=>{
	return (dispatch)=>{
		setTimeout(()=>{
			// store.dispatch(createIncrementAction(data))
			//因为该函数到时候肯定是由store调用的，形参里其实已经传入了dispatch。因此不需要在上面引入store。
			dispatch(createIncrementAction(data))
			//弹幕store的dispatch方法会判断 传入值是函数还是对象，如果是函数，那就给这个函数传参数，参数是store的dispatch方法并且执行这个函数
		},time)
	}
}
//虽然异步action的值是函数，但store只认可同步action。此时就需要借助redux-thunk来和store“沟通”
//yarn add redux-thunk
//然后，如果你传给store的action是同步的，则交给reducer处理。如果是异步的action，则帮你调用。