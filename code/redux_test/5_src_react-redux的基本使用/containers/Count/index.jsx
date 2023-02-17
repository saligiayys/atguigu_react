//Count的容器组件：
//容器组件的创建不能自己写，它是一个连接redux和UI组件的桥梁。需要借助react-redux
//yarn add react-redux
//同时需要引入Count的UI组件。
//引入Count的UI组件
import CountUI from '../../components/Count'

//同时也要引入redux，严格说，是引入redux的核心store
// import store from "../../redux/store";
//但注意，不是在这里引入，而是在App组件里，以<Count store={store} />的方式，通过props引入！
//这是一个难点。因为按照正常思维，哪里需要就在哪里引入。但这里需要的store就得在App里，以这种方式引入！
//具体为啥，后面讲优化的时候讲

//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//const CountContainer = connect()(CountUI);  通过这种方式创建容器组件！！！组件开头大写

// 因为这里父组件和子组件的关系是通过connect()()创建的，而不是之前标签的形式。
// 所以这里父组件向子组件传递props不是使用之前：<A><B key={value}/><A/>，的方式，而是connect()()的方式
// 因此容器组件向UI组件传递props的方式是：connect在第一次调用的时候需要传入两个参数，且这两个参数必须都是函数。这两个函数会由react-redux帮你调用
//容器组件的功能：给UI组件传递：1.redux中所保存的状态。2.用于操作状态的方法。

/* 函数1： 该函数的返回值会作为状态传递给UI组件：
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态

	因为props是一组一组的key-value，不能能光传递value，因为在取value的时候需要通过key去取value
	所以很自然的需要return一个对象
*/
//用箭头函数也行
function mapStateToProps(state){//state就是redux里帮你保存的状态，此案例里是0
	//因为App里已经通过<Count store={store} />传入了store，因此不需要{count:store.getState()}
	//因为该函数的目的是向UI组件传递状态。所以这里一定需要用到state
	// 因此当react-redux在帮你调用这个函数的时候，已经帮你调用store.getState并把返回的state传进来了。只需要在形参里接收即可然后传给UI组件即可。
	return {count:state}
	//该函数的作用就相当于：<Count key={value}/>
}

/*  函数2：该函数的返回值会作为操作状态的方法传递给UI组件
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch){
	return {
		//子组件只要调用jia这个方法，这里就会收到num，然后通知redux通过dispatch进行运算。
		// jia:(number) => {store.dispatch({type:"increment",data:number})},
		//同理，我们这里没有引入store，而是在App里已经通过<Count store={store}/>引入了
		//因为该函数的目的是给UI组件传递操作状态的方法。咋操作呢？当然是通过dispatch！所以这里一定需要dispatch
		//因此当react-redux调用这个函数的时候，也已经传入了dispatch，因此同第一个函数，只需要在形参接收，然后直接调用即可。
		//所以说，人家之所以能让你传如这两个函数，说明人家对这俩个函数已经进行了处理，否则什么都要你自己写，这封装了也没啥意义，我们还用这个库干啥呢！
		//箭头函数精简后：
		jia:number => dispatch(createIncrementAction(number)),
		jian:number => dispatch(createDecrementAction(number)),
		jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
	}
}

//使用connect()()创建并暴露一个Count的容器组件，容器组件里包裹着UI组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
//最终在页面渲染的是容器组件。但因为容器组件是父组件，因此子组件UI组件也就随之被渲染。
//因此在App.jsx里引入的那个Count组件，应该是容器组件。import Count from './containers/Count'
//所以在这里通过代码无法看出容器组件Count是UI组件Count的父组件，这个父子关系是依靠connect形成的，而不是之前的父组件标签里写子组件标签的形式。
//这就需要通过react开发者工具来查看。
//那父组件如何通过props向子组件传递数据呢？
//connect在第一次调用的时候需要传入两个参数，且这两个参数必须都是函数。
//所以connect是核心。第一个括号，函数1：映射状态；函数2：映射操作状态的方法。第二个括号：跟谁做关联。

