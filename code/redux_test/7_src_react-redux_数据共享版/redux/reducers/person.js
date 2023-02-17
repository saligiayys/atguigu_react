import {ADD_PERSON} from '../constant'

//初始化人的列表。是一个数组，里面存放一个一个的人的对象
const initState = [{id:'001',name:'tom',age:18}]

export default function personReducer(preState=initState,action){
	// console.log('personReducer@#@#@#');
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: //若是添加一个人，且在数组最前面
			return [data,...preState]

			//不要使用push，unshift等方法，如下
			// preState.push(data);
			// return preState;
			//因为react底层进行的是一个浅比较。
			//也就是由于preState存的值是引用数据类型，react发现return的preState的地址值和之前的是一样的。
			//虽然push之后数组里面的内容改变了，但react也不认为这是一种改变，所以没有进行页面的更新。
			//因此不能直接return preState，而是创建一个新的数组[data,...preState]，这时地址就不一样了。
			//所以在react和redux里，很少使用push,shift,unshift等方法进行数据的修改。
			//且使用push等方法破坏了纯函数原则。redux要求reducer是一个纯函数
			//纯函数：只要是同样的输出（实参），必定得到同样的输出（返回）。 注意这里不是说传入2必须返回2的意思
			// 也就给一个函数传入一个参数，该函数每次执行的结果都是一样的。比如某个函数传入2，无论执行多少次，结果都是4。
			//不是纯函数的情况：函数体使用Math.random()则即使我参数传的是1，每次结果也不一样。
			//具体看老师课件

		default:
			return preState
	}
}