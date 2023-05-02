/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from '../constant'

//同步action，就是指action的值为Object类型的一般对象
//最终版把createXxxAction直接写成了xxx，因为看文件树就应该能知道这个是用来创建action的。但也可以根据自己的情况改。
export const increment = data => ({type:INCREMENT,data})
export const decrement = data => ({type:DECREMENT,data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const incrementAsync = (data,time) => {
	return (dispatch)=>{
		setTimeout(()=>{
			dispatch(increment(data))
		},time)
	}
}