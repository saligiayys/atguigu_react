//webpack用的入口文件
//如果删除/移动了某个文件，需要在这里进行修改，并重启服务npm start
//比如对于index.css文件，也可以移动到public的css文件夹里，
//在index.html通过<link>标签引入，并从这里删除。完全取决于个人的编码习惯

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(//<React.StrictMode>标签可以帮助检查App以及所有子组件里写的东西是否合理。比如写了字符串类型的ref，ref="demo"会提示警告。相当于语法检查
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  //react底层已经做了处理(通过webpack配置)，可以直接找到index.html里的root
  //所以index.html这个名字不能改，但可以修改root这个节点的名字
);
//所以上面的代码精简后，就是基础里面写的这条代码：
// ReactDOM.render(<app/>, document.getElementById("root"));

reportWebVitals();//用于记录页面上的性能，使用了web-vitals库。了解即可

//所以整个项目启动的执行顺序是先到src下的index.js，在这个文件里引入react相关的核心库文件(脚手架都帮你安装好了)，App组件，样式等。
//然后触发ReactDom.render在index.html的root节点中，渲染App.js组件。
//遇到getElementById("root")后，就去index.html里找root节点。
//react底层已经做了处理(通过webpack配置)，可以直接找到index.html里的root
//所以index.html这个名字不能改，但可以修改root这个节点的名字

//因此我们需要写的，只有index.html,App.js以及index.js这个三个文件。而这三个文件里,index.html和index.js基本上是固定结构，主要写的是App.js和其他自定义组件
//其他都是周边的配置文件(可以删除)。脚手架需要考虑全部，但我们一般也用不上这么多，等用到再重新写即可。


//补充：React的npm start 3000端口服务器用谁开的？用的是 webpack-dev-server