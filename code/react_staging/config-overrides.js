//注意这里的配置更改后，需要重启npm start!!


//为了按需引入，我们还需要安装babel-plugin-import这个库


//配置具体的修改规则
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

//commonJs语法。暴露一个函数，该函数可以接收脚手架原有的配置(因为你用的是react-app0rewired start命令启动的脚手架)
module.exports = override(
	fixBabelImports('import', {//因为你要按需引入，所以是import
		libraryName: 'antd',//你要引入的是antd
		libraryDirectory: 'es',//表示es的模块化规范
		// style: 'css',//你要引入的是css
		// 因为按需引入了，因此App.jsx里不再需要引入完整的antd.css
		//并且你会发现，所谓的按需引入，其实是自动化按需引入，你发现在这里并没有写要引入哪些样式。

		//第三课相关，因为要用到less对主题进行自定义，因此不再是对css进行引入。按照文档要求改成true，注意是布尔值，不是字符串
		style: true,
	}),
	addLessLoader({//Webpack相关，用于解析Less
		// javascriptEnabled: true, 
		// modifyVars: { '@primary-color': 'purple' },
		//注意，老师讲课的时候，这里报了一个底层的错误。并不是代码逻辑的错误。
		//原因是antd的文档不一定会及时更新，比如里面的用法需要依靠less等第三方。有时less更新了而antd的文档没更新，需要自己自己查看一下。

		lessOptions:{
		javascriptEnabled: true, //允许使用js去修改antd底层的less文件。
		modifyVars: { '@primary-color': 'green' },//@primary-color就是用来保存主题颜色的变量，rgb值，单词都行
		}//弹幕说这个方式有点过时了
		//需要看4.x版本的文档。或者下载低版本的less。弹幕：修改less的版本为2.7.3；less-loader版本为5.0.0
	}),
);