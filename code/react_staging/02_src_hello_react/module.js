/*
ES6模块化语法复习：
    在这里自己定义一个React对象。
    再定义一个Component类
    通过React.Component = Comonent的方式给自定义的React对象添加一个属性，也叫Component，它的值是Component类
    此时，该React对象身上有三个属性，分别是a,b,Component
    我们开始再index.js里引入
*/

const React = { a: 1, b: 2 };

//分别暴露Component类
export class Component {

}

//把上面的
React.Component = Component;

// export Component; //分别暴露不能在这里写，必须用上面的方式暴露
export default React;


/*
此时，这个文件做了两件事：
1.用默认暴露的方式，暴露了React这个对象。而React对象身上有一个叫Component的属性
    在index.js里，需要通过解构赋值，const {Component} = React 的方式得到
2.与此同时，还用了分别暴露的方式，暴露了Component这个类。 
    在index.js里，需要通过分别暴露的引入方式来引入：import {Component} from './module.js';
*/