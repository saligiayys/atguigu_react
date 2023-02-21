const express = require('express')//引入express对象
const app = express()//创建app服务器对象

//全局中间件
app.use((request, response, next) => {//一旦有人请求该服务器，就会输出以下内容
	console.log('有人请求服务器1了');
	console.log('请求来自于', request.get('Host'));//从setUpProxy.js里获取的Host
	console.log('请求的地址', request.url);//用来测试写/api1和不写的区别
	next()
})

//后端路由：如果访问students，则返回以下内容
app.get('/students', (request, response) => {
	const students = [
		{ id: '001', name: 'tom', age: 18 },
		{ id: '002', name: 'jerry', age: 19 },
		{ id: '003', name: 'tony', age: 120 },
	]
	response.send(students)
})

//用于启动服务器的代码
app.listen(5000, (err) => {
	if (!err) console.log('服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students');
})


//使用命令：node server1.js  开启服务器
//凡是对服务器里的代码进行了修改，都要重新启动服务器
//cls清空终端
