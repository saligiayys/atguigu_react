//这个文件里的语法，不能用es6的语法，要用commonjs的语法（cjs），因为不是给前端执行的，而是将其添加到webpack的配置里。
//因为react脚手架会找到这个文件，并把它加到webpack的配置里。因为webpack里都是node的语法，也就是cjs
//这些不用记，只要知道做配置的时候加上即可，这些东西以后可以直接拿来用。因为一个项目也就配置一次代理。
//这些配置做完，要重启脚手架
//随后只要对这里做了修改，都要重启

//引入内置模块
const proxy = require('http-proxy-middleware')
//react脚手架里已经下载好http-proxy-middleware这个库了
//其实方式1在package.json里配置的那种方式，是这个方式的简写，这里是完整版。

//暴露一个对象/函数。新版React脚手架建议暴露函数
module.exports = function (app) {//函数会受到一个服务对象app
	app.use(
		proxy('/api1', { //遇见/api1前缀的请求，才会触发该代理配置，转发给5000即server1。配置灵活，写api1就走5000的代理，否则不走
			target: 'http://localhost:5000', //请求转发给谁
			changeOrigin: true,//控制服务器收到的请求头中Host的值  默认值false
			//Host标识了本次请求是从哪里发出的
			//如果false:	服务器那边console.log('请求来自于',request.get('Host'));输出的是：请求来自于 localhost:3000	也就是服务器那边知道请求本质上还是从3000发来的。有时服务器会配置一些严格的限制，如果不是相同端口，可能会有问题。
			//如果true:	服务器那边输出的是：请求来自于 localhost:5000	相当于欺骗服务器请求是从5000发来的，服务器会认为请求是从自家发来的
			//因此如果你不写true，其实服务器是知道请求是从3000发从到服务器的（服务器5000），偶尔服务器可能有一些严格的配置和校验，可能会对这次请求有一些限制
			//这个一般加不加没什么太大的问题，但一般需要加这个配置，避免一些潜在的问题。


			pathRewrite: { '^/api1': '' } //正则匹配，重写请求路径(必须)，意思是将api1替换成空字符串
			//把api1前缀替换成空串
			//因为正常的url里是不应该有api1的，但我们需要靠api1来转发请求给5000
			//但加了api1路径就不对了，因此需要靠这种方式再改回来。
			//例：
			//如果不写这个代码，服务器那边console.log('请求的地址',request.url);输出的是/api1/students。
			//注意，这样依然通过了代理去访问了server1，因为你明确加上了/api1(服务器也会输出有人请求服务器1了)，但服务器那边没有api1这个路径，因此客户端这里会出现404
			//如果写这个代码，服务器那边输出的是/students，把/api1抹掉了
			//所以这个代码必须写！

			//所以第一行写/api1，是为了让代理知道转发给server1
			//后面正则里的/api1，是为了在url发送给server1时，干掉路径中的/api1

			//再次重申，凡是修改了这里的内容，需要重启npm start
		}),
		proxy('/api2', {//见到/api2转发给5001，即server2
			target: 'http://localhost:5001',
			changeOrigin: true,
			pathRewrite: { '^/api2': '' }
		}),
	)
}