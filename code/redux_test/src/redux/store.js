/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
	以后开发中，这里的结构基本固定
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware } from 'redux'
//applyMiddleware用于创建中间件，不然不能使用thunk

//引入汇总之后的reducer。
//之前的reducers被移动到了reducers文件夹的index.js里集体进行了处理，在这里引入
//不然有n多reducer这里太乱了
import reducer from './reducers'

//引入redux-thunk，用于在Count的action里支持异步action
import thunk from 'redux-thunk'

//引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'
//用于支持浏览器的Redux开发者工具

//暴露store 
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))