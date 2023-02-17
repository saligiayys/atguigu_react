//配置具体的修改规则
const { override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',//表示es的模块化规范
    style: true,
	}),
	addLessLoader({
		// lessOptions:{
			javascriptEnabled: true, //允许使用js去修改antd底层的less文件。
			modifyVars: { '@primary-color': 'purple' },
		// }//这个方式有点过时了，需要看4.x版本的文档。或者下载低版本的less。弹幕：修改less的版本为2.7.3；less-loader版本为5.0.0
	}),
);