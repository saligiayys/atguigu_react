import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
const { RangePicker } = DatePicker;//从DatePicker里再取出一个RangePicker

// import 'antd/dist/antd.css';

//npm知识点：像react和antd等第三方库(包)，直接写的'react'没有写路径，则默认直接在node_modules里面找。

export default class App extends Component {
	//antd第一节课相关：
	//安装ant-design: yarn add antd
	//基本的使用，在页面的上部导航条的组件里找。更高阶的用法后面讲
	//挑一个自己喜欢的，比如一个按钮，复制其代码到这里来。
	//根据网站的说明，引入antd库，并引入所需的组件，比如这里用到了Button组件，DatePicker组件等
	//光引入Button等组件还不够，还要把antd.css样式引入。

	//每个组件的右侧都有一个API选项，点击会直接来到网页底部，可以告诉你都有哪些属性可以配置。
	//总之，具体怎么配置，需要引入什么，还有哪些属性，都可以通过读antd的使用说明得知。
	//因此，重点是学会怎么用！
	//像这种UI组件库，适用于简单的后台管理系统等，不适用于一些注重设计和独特效果的项目。

	//antd第二节课相关：
	//但是注意：import 'antd/dist/antd.css';这样引入是把所有antd的样式引入。
	//这个文件是很大的，我们最好按需引入样式，比如用Button组件，只引入Button所需的样式
	//如何操作呢？看Antd的文档。但是注意建议看3.x版本的文档。因为4.x的文档跳跃性太大，不是那么详细。(但最好结合看，有的可能跟新了，只能用4.x版本)
	//首先说明：虽然文档里说了要对脚手架的配置进行一些修改，但我们不需要使用eject命令去暴露。虽然可以，但是太麻烦，且容易不小心碰坏配置。
	//具体方式查看右侧导航：在creat-react-app里的高级配置。红色减号是不要的，绿色加号是要更新的。
	//或者看老师的笔记，在README里
	//注意，package.json里的不能有注释。
	//大致说一下：config-overrides.js里写的是规则；靠customize-cra这个库去执行修改；最后依靠react-app-rewired来启动。

	//antd第三节课相关：
	//如何修改主题颜色？比如从支付宝蓝改成别的颜色？你可以通过检察元素来看看antd使用了什么样式类名，然后自己写一个同名的，把颜色替换掉
	//但这样一是工作量太大，而且有时不一定能完全覆盖住antd的样式，因为人家也使用了权重。
	//正确的方式：找到antd底层的的那个主题颜色的变量，对其进行修改。
	//antd使用less写的，然后转换成css文件。所以我们需要做的是先找到less文件里的那个主题颜色，对其修改。
	//具体操作方式可以在文档右侧导航条的:creat-react-app，然后在自定义主题里找到说明。或看老师的笔记
	//修改后要重启脚手架
	//需要注意的是，antd的文档不一定会及时更新，比如里面的用法需要依靠less等第三方。有时less更新了而antd的文档没更新，需要自己自己查看一下。

	//其他常用UI框架：Element,Vant,以及国外的Material
	//因此如果公司用的不是antd，学会使用官方文档是关键。

	render() {
		return (
			<div>
				App....
				<button>点我</button>
				<Button type="primary">按钮1</Button>
				<Button >按钮2</Button>
				<Button type="link">按钮3</Button>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>

				{/*图标相关内容，根据网站的说明，需要引入antd的子库：@ant-design/icons，然后引入所需组件，比如WechatOutlined*/}
				<WechatOutlined />
				<WeiboOutlined />

				<DatePicker/>
				<RangePicker/>
			</div>
		)
	}
}
