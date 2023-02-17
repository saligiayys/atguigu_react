//引入react核心库。脚手架都帮你安装好了。
import React from 'react'
//引入ReactDOM。脚手架都帮你安装好了
import ReactDOM from 'react-dom'
//引入App组件。后缀.js以及jsx是可以省略的。但.css不能省略
import App from './App'

//上面的三个名字React,ReactDOM和App这种默认暴露的名字可以改(es6模块化语法)，但一般不改。{}这种分别暴露的 不能改名
//ES6模块化语法复习，见module.js文件

//渲染App到页面
ReactDOM.render(<App/>,document.getElementById('root'))


//全选下面所有内容，再注释/解注释

// //注释掉上面的代码，解开下面的代码，用于复习ES6模块化语法，区分模块化语法和解构赋值的区别
// //引入我们自定义的React
// //注意，这里的Component并不是module.js文件里的React的Component属性，而是module.js里通过分别暴露的方式暴露出去的那个Component类！
// //因此这里的Component不是下面解构赋值的那个Component，
// //所以，如果在module.js里没有分别暴露Componet类的话，这里会报错：Component is not exported from './module.js'
// import React from './module.js';
// // import React, { Component } from './module.js';

// console.log(React);//{a: 1, b: 2, Component: ƒ}

// //可以通过解构赋值的方式，从React身上提前取出Component属性
// //因为两个Component同名，因此必须要注释掉其中一个，否则报错！
// const { Component } = React;

// console.log(new Component);//Component {}

// /*
// 虽然两种方式都能使用Component，但是一定要区分，这是通过两种不同的方式得到的！
// */