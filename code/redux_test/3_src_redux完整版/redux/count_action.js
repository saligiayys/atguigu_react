/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

// function createIncrementAction(data) {
//     return {type:"increment", data}; //data:data简写
// }
// function createDecrementAction(data) {
//     return {type:"decrement", data};
// }
//备注，虽然这两个方法可以合成一个，但为了教学的铺垫，还是拆成两个写。

//可以改写成箭头函数
// const createIncrementAction = data => {type:"increment", data}
//但注意这样写是不对的！{}会被人为是函数体的花括号，而不是你要返回一个对象！！
//笨方法：{ return {type:"increment", data}}
//好方法：用()包裹起来，就可以返回一个对象了，因为()表示一个整体
export const createIncrementAction = data => ({type:INCREMENT,data});
export const createDecrementAction = data => ({type:DECREMENT,data});
//定义了constant组件，使用INCREMENT变量。在上面引入。注意是变量，因此不要加""
