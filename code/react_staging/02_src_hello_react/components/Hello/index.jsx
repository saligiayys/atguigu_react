import React, { Component } from 'react'
import hello from './index.module.css'

export default class Hello extends Component {
	render() {
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}
/*
	说明：工作中分为两种目录结构，以Hello为例
	1. components/Hello/Hello.jsx
	   components/Hello/Hello.css
	   这样写的好处是易于区分，但在App.jsx里引入时要这么写：也就是写两遍/Hello
	   import Hello from './components/Hello/Hello'

	2. components/Hello/index.jsx
	   components/Hello/index.css
	   这样写的好处是在App.jsx里引入时可以这么写：只需写一次/Hello，且不用写/Hello/index.jsx (因为index名字的特殊性，可以自动被找到。)
	   import Hello from './components/Hello'
	   但坏处是，当窗口开的太多是，标签栏里不利于区分

	这要根据公司的要求来选择用哪一种(用index的比较多)

	再补充一点，样式的模块化。(非必须)
	如果Hello和Welcome里，css文件的类名都叫title，但一个是蓝色，一个是橙色。
	如果都是通过import './index.css'的方式引入，通过<h2 className="title">的方式配置的话，
	由于这两个组件最后都要放到App.jsx里，由于Hello和Welcome最终肯定要一个在前，一个在后，那么后面的会覆盖掉前一个的title，
	也就是最终显示可能都是蓝色，或橙色，产生样式冲突的问题。
	我们可以使用样式的模块化来避免这个问题。在定义css文件时，要以：xxx.module.css的格式命名文件。
	然后通过import hello from './index.module.css'方式引入，这样变量hello会作为一个对象接收。
	然后通过这种方式配置<h2 className={hello.title}>，这样就不会产生样式冲突的问题了。
	但这种方式一般用的比较少，因为会使用less或scss的方式，也就是：
	hello{
		.title{xxx}
	}
	less等css预处理器可以嵌套，因此不会冲突
	或者类名之类的一般也不会起相同的名字，这样是不会产生冲突的。

	但如果你是用的是原生css，可以考虑样式的模块化。

 */