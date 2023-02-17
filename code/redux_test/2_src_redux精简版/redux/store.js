/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore方法，专门用于创建redux中最为核心的store对象
import {createStore} from 'redux'

//引入为Count组件服务的reducer。默认暴露，统一暴露或者分别暴露可以随意发挥，但一般默认暴露
import countReducer from './count_reducer'

//暴露store
// const store = createStore(countReducer);
// export store;
//也可以写成一行
export default createStore(countReducer)