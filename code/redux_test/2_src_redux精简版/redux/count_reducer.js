/* 
	1.该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
	2.reducer函数会接到两个参数，分别为：之前的状态(preState)，动作对象(action)
*/

const initState = 0 //初始化状态。当然你也可以设置初始化值为99等任意数
//preState=initState形参的默认值！不传，或者是undefined就是0，所以初始化是0！当然你也可以用if判断，或者干脆直接在default里return 0。
export default function countReducer(preState=initState,action){
	// console.log(preState);//最开始是undefined。因为加上了形参默认值，后来变成了0。之后会根据不同运算输出不同的值
	// console.log(action);//{type: "@@redux/INIT2.b.w.f.y.h"}  后面是随机字符，避免和你在switch里写的case恰好对上
	//因为之前说过,data可以没有，所以这里并没有输出data。但type是必须的，是undefined，但其实长这样：@@redux/INIT2.b.w.f.y.h

	//从action对象中获取：type、data
	const {type,data} = action
	//根据type决定如何加工数据
	switch (type) {
		case 'increment': //如果是加
			// console.log("@");//测试是否匹配上。自己学习的时候遇到问题，也要知道应该在哪里输出来判断代码的执行情况。
			return preState + data
		// break; //因为有return了，就不需要break了，下同
		case 'decrement': //若果是减
			return preState - data
		default://不加也不减，即初始化的时候
			return preState
		//在reduce里只负责最基本的运算，比如+-*/，什么如果是奇数再加，异步加，不在这里写。而是在之前的组件的步骤里判断好。
		//所以reduce是一个纯函数（后面细讲）
	}
}