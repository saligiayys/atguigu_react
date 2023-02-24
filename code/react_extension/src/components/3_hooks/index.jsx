import React from 'react'
import ReactDOM from 'react-dom'

//回顾，函数式组件之所以没有state，ref，生命周期钩子等特性(可以有props)，是因为在函数式组件里没有this，或者说this是undefined，而非组件实例对象。
//弹幕：函数式组件现在才是主流。因为函数性能高

//用类式组件写的求和案例
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		//卸载组件。记得在下面的componentWillUnmount钩子里关闭定时器
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		//清除定时器
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

//用函数式组件写的求和案例。
function Demo() {
	//console.log('Demo');//Demo调用1+n次，相当于类式组件里的render。初次渲染调用第一次，之后随着状态的改变(setXxx)而调用。
	//那按理说React.useState(0)也会重复调用多次。但为什么下面的state不是一直为0呢？因为react底层做了缓存处理。第一次调用时，会把count保存。
	//等以后再次调用Demo()时，虽然58行确实又执行了，但不会因为再次执行而被0覆盖掉。

	// 1.使用State Hook:React.useState()，可以使函数式组件具有state，并对其进行读写。
	// const a = React.useState(初始值);
	// useState会返回一个数组，里面有两个元素：
	// 1是state，就是useState()传入的实参
	// 2是用于更新state的方法，形参传入新值即可。调用该方法会重新调用该函数组件Demo，渲染页面。
	// 因此这里一般使用数组的解构赋值。数组的解构赋值按照位数写即可，叫什么名字都可以。
	const [count, setCount] = React.useState(0)//0的意思是该案例求和的初始值为0
	//可以多次调用useState
	const [name, setName] = React.useState("Tom");

	//不能写成
	//const [state,setState] = React.useState({count:0,name:"Tom"});
	//因为这里的setXxx并不像类式组件里的setState是合并操作。如果你在下面只修改了count，则name会消失

	//这个是在Effect Hook后讲的，所以是3
	//3.Ref Hook:React.useRef()，可以使函数式组件使用ref
	// 其实和React.creatRef()差不多。也是专人专用。
	const myRef = React.useRef()

	//2.使用Effect Hook:React.useEffect()，可以使函数式组件能够使用生命周期钩子。
	// 其形参要传入一个函数，这个形参函数就相当于生命周期钩子，严谨点说，相当于componentDidMount() + componentDidUpdate()这两个钩子
	// 通过console.log输出@的可以看出，这个函数不仅仅在组件挂载时执行，在组件更新的时候也执行了
	//因此，如果把定时器写在这里会不断生成新的定时器，导致越来越快。
	//如何解决呢？其实useEffect()还可以传入第二个参数，一个空的数组。加上这个[]后会发现，@只有在第一次挂载时输出。
	//原理：不写[]，底层会在所有状态发生改变的时候，再次调用useEffect里的函数，也就是1+n次。
	//而[]起到一个监测的作用。如果不写，则表示监测所有的state。无论上面的count或name哪个改变，都会调用这个函数。
	//如果写的是[]空数组，则表示谁也不监测，也就是不会更新组件(相当于componentDidUpdate这个钩子被取消了)。
	//因此不写[]表示默认监测所有state，写[]表示所有state都不检测。[count]表示只监测state里的count，即count变化时，组件更新，componentDidUpdate触发，会调用该函数。
	//所以，如果不使用[]，则useEffect()形参里的函数相当于componentDidMount() + componentDidUpdate()这两个钩子，且componentDidUpdate不监视state，只要有state更新，就会触发
	//或者使用[]且里面有内容比如count，则也相当于componentDidMount() + componentDidUpdate()这两个钩子，但componentDidUpdate只监视count，只有当count更新，组件才会更新，节省消耗，提升性能。
	//如果使用[]且里面是空的，则useEffect()形参里的函数只相当于componentDidMount()这个钩子。此时使用定时器就没有问题了！！！
	//此外，useEffect()的形参里的这个函数，如果返回一个函数，这个被返回的函数相当于componentWillUnmount生命周期钩子！！
	//小结：可以把 useEffect Hook 看做如下三个函数的组合
	//         componentDidMount()
	//         componentDidUpdate()
	//         componentWillUnmount()
	React.useEffect(() => {
		// console.log("@");
		let timer = setInterval(() => {
			setCount(count => count + 1)
		}, 1000)
		return () => {//这个return的函数，相当于componentWillUnmount生命周期钩子
			//因此清除定时器的操作应该写在这里。
			clearInterval(timer)
		}
	}, [])

	//加的回调
	function add() {
		//setCount(count+1) //第一种写法
		//第二种写法，和setState一样可以传入一个参数。参数传入之前的state，返回新的state，覆盖之前的state。
		setCount(count => count + 1)
	}

	function changeName() {
		setName("Ethan");
	}

	//提示输入的回调
	function show() {
		alert(myRef.current.value)
	}

	//卸载组件的回调。清除定时器的代码，需要写在上面84行return的那个函数里。
	function unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef} />
			<h2>当前求和为：{count}</h2>
			<h2>我的名字是：{name}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={changeName}>点我改名</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo
