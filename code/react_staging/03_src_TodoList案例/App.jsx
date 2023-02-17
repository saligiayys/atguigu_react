import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

//因为后面的课程用到了bootstrap而这里没用，因此需要把public里的index.html的引入bootstrap注掉，不然结构会乱

//引入原则：第三方的包(比如react核心)放在最上面，自己的包放在中间，样式包放最下面

//需求：
// 功能: 组件化实现此功能
// 1. 显示所有todo列表
// 2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本

//相关知识点在README里有总结

//首先，每个人拆分组件的方式是不一样的，你也可以自己拆，但一定要合理。这里选择拆分成四个组件，Header,List,Item,Footer
//拆分组件的通用思想看老师的笔记。在公司里拿到一个传统方式写的老项目，如果要改成react，就要有拆分组件的能力！（这是一个费事的工作）
//此案例的准备工作。
//1.从静态文件里把整个html结构复制到App.jsx里（然后在慢慢拆成组件）。
//但由于静态文件中的html也用到了id=root的div，而public的index.html里已经有root的div了，因此不需要copy过来。
//但需要double-check一下css里有没有使用root定义的样式。
//2.把class=全部替换成className=
//3.把style="xxx:yyy" 全部替换成 style={{xxx:"yyy"}}
//4.从静态文件里把css文件复制到App.css里，然后在慢慢拆成组件。记得在App.jsx里引入样式
//5.开始考虑如何拆分组件，先结构，再样式
//6.通过拆分，把对应的html放入相应的组件，再在html原先的位置上写上对应的组件，并在上面引入。
//7.相较而言，拆分样式比拆分结构难。尤其是注释很乱，或没有注释的情况
//8.把对应的样式放入对应到组件中，并引入

export default class App extends Component {
	//以目前所学的内容，无法实现兄弟组件Header和List之间的交互。（之后可以使用消息订阅与发布）
	//因此，由于这两者的父组件都是App，因此通过App和这两者进行交互
	//App作为父组件可以很容易的给子组件传递props
	//但子组件是否可以向父组件传递呢？
	//可以。父组件可以通过props向子组件传递一个函数，由子组件接收后，在合适的时候调用该函数，可以实现逆向给父组件传递props
	//这是组件间的通信办法之一

	//状态在哪里，操作状态的方法就在哪里!!!。但不一定是App调用。这里就是吧addTodo,updateTodo等方法传给了子组件
	//初始化状态。通过props把state里的todos传递给List
	//todos数组，里面的每个元素是一个对象
	state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}

	//addTodo用于添加一个todo，接收的参数是todo对象
	//父组件可以通过props向子组件Header传递一个函数，由子组件接收后，在合适的时候调用该函数，可以实现逆向给父组件传递props
	addTodo = (todoObj)=>{
		//获取原todos
		const {todos} = this.state
		//追加一个todo  react不建议使用原生数组的方法，所以不建议使用unshift
		const newTodos = [todoObj,...todos]
		//更新状态
		this.setState({todos:newTodos})
	}
	//整体的交互模型：
	//App开始存有一些todos(待办的事项)，传给List。App还有一个函数addTodo，传给了Header，用于接收一个todoObj
	//Header会在合适的时候，调用“当年”App通过props传给他的addTod函数，通过该函数把todoObj交给了App
	//App在拿到todoObj后，放到自己的状态(state)里，导致自己状态的更改，从而重新调用App的render函数
	//App的render函数调用后，引发了子组件List的重新渲染，然后就在页面上展示出来了。

	//updateTodo用于更新一个todo对象
	//父组件可以通过props向子组件List传递一个函数，再由List传给它的子组件Item，由(孙)子组件接收后，在合适的时候调用该函数，可以实现逆向给父组件传递props
	updateTodo = (id,done)=>{
		//获取状态中的todos
		const {todos} = this.state
		//匹配处理数据。使用map遍历：map返回一个新的数组，数组中的元素为原始数组调用函数处理后的值。
		const newTodos = todos.map((todoObj)=>{
			//如果匹配上了，返回一个新的对象
			if(todoObj.id === id) return {...todoObj,done}//注意这里使用了简写，原来是done:done
				//没有匹配上，返回原来的对象
			else return todoObj
		})
		this.setState({todos:newTodos})

		/*复习：注意这个{...obj1}和react里{...obj1}的区别！！！前面的是解构，后面的是在{}写js表达式！！！
			let obj1 = {a:1,b:2};
			let obj2 = {...obj1,b:3};
			console.log(obj2); //{a:1,b:3}
		*/
	}

	//deleteTodo用于删除一个todo对象
	//父组件可以通过props向子组件List传递一个函数，再由List传给它的子组件Item，由(孙)子组件接收后，在合适的时候调用该函数，可以实现逆向给父组件传递props
	deleteTodo = (id)=>{//注意这里有个坑，不要把函数名叫做delete，delete是关键字！用于删除某个对象里的指定属性。例如：let obj = {a:2,b:3}; delete obj.a
		//获取原来的todos
		const {todos} = this.state
		//删除指定id的todo对象
		//使用filter。比如要删除id=002的，则要把那些id不是002的过滤出来返回，002不返回
		//思考：是否可以使用splice
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//checkAllTodo用于全选
	//把它传给Footer
	checkAllTodo = (done)=>{
		//获取原来的todos
		const {todos} = this.state
		//加工数据。弹幕：forEach性能更好
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj,done}//把所有done改为true，这里又实用了简写，原来是done:done
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	//clearAllDone用于清除所有已完成的
	//把它传给Footer
	clearAllDone = ()=>{
		//获取原来的todos
		const {todos} = this.state
		//过滤数据
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done//把done为false的过滤出来返回，去掉done为true的
		})
		//更新状态
		this.setState({todos:newTodos})
	}

	render() {
		//注意！！传递参数的时候！千万不要加()!!!!
		//通过props，将state里的todos传给List
		//通过props，将App的addTodo函数传给Header
		//通过props，将App的updateTodo传给List，再由List传给它的子组件Item
		//通过props，将App的deleteTodo传给List，再由List传给它的子组件Item
		//通过props，将state里的todos传给Footer，用于实现 已完成，全部 的统计
		//通过props，将App的checkAllTodo函数传给Footer
		//通过props，将App的clearAllDone函数传给Footer
		//自己优化了一下Header，不能输入重复，所以给Header传了一个todos
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo} todos={todos}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
			//todos={todos}不用写this.是因为在render里通过todos接收了。
			//而updateTodo={this.updateTodo}没有接收，是类的成员，因此要用this.
		)
	}
}
