import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { WechatOutlined, WeiboOutlined, SearchOutlined } from '@ant-design/icons'//因为不是所有情况都用图标，因此和React，ReactDOM一样，分成了几个子库，否子都放一起太大了。
const { RangePicker } = DatePicker;//从DatePicker里再取出一个RangePicker。
//这些需要看文档才能知道一个组件到底是在antd里？还是在其他子库里？又或者像这个一样是某个组件的对象？

//因为第二节课按需引入了，因此不再需要引入完整的antd.css
// import 'antd/dist/antd.css';

//npm知识点：像react和antd等第三方库(包)，直接写的'react'没有写路径，则默认直接在node_modules里面找。
//同样，@ant-design/icons也一样。但如果写成/@ant-design/icons则不会再node_modules里找，而是项目目录里找

export default class App extends Component {


	//2023-04-14 现在Antd版本是5.42，个别内容不一样了。按需引入的方式页变简单了。还是看Antd文档。

	//antd第一节课相关：
	//安装ant-design: yarn add antd
	//基本的使用，在页面的上部导航条的组件里找。更高阶的用法后面讲
	//挑一个自己喜欢的，比如一个按钮，复制其代码到这里来。
	//根据网站的说明，引入antd库，并引入所需的组件，比如这里用到了Button组件，DatePicker组件等
	//光引入Button等组件还不够，还要把antd.css样式引入。

	//每个组件的右侧都有一个API选项，点击会直接来到网页底部，可以告诉你都有哪些属性可以配置。
	//总之，具体怎么配置，需要引入什么，还有哪些属性，都可以通过读antd的使用说明得知。
	//因此，重点是学会怎么用！
	//像这种UI组件库不是万能的，适用于简单的后台管理系统等(比如Cooper Young App)，不适用于一些注重设计和独特效果的项目(比如淘宝)。


	//注意！现在Antd已经5.x了。自定义主题和按需引入已经方便很多。下面的仅供参考。

	//antd第二节课相关：2023-04-17补充：弹幕：最新的antd 5.x版本使用cssinjs，原生支持按需引入，不需要配置了
	//但是注意：import 'antd/dist/antd.css';这样引入是把所有antd的样式引入。
	//这个文件是很大的，我们最好按需引入样式，比如用Button组件，只引入Button所需的样式
	//如何操作呢？看Antd的文档。但是注意建议看3.x版本的文档。因为4.x的文档跳跃性太大，不是那么详细。(但最好结合看，有的可能更新了，只能用4.x版本)
	//首先说明：按需引入样式需要修改React脚手架的配置，但我们开不到这些配置文件，需要暴露出来。
	//虽然文档里说了要对脚手架的配置进行一些修改，但我们不需要使用npm/yarn eject命令去暴露。虽然可以，但是太麻烦，且容易不小心碰坏配置。
	//简单说，就是不暴露所有配置文件，而是把你想要修改的文件明确指出来。我们手动在项目根目录创建一个config-overrides.js的文件，在里面配置。
	//然而，config-overrides.js里的内容仅仅是规则，我们还需要执行它。如何执行？需要借助customize-cra这个库执行
	//这个库可以找到config-overrides.js文件从而修改React脚手架配置
	//但我们安装时的命令是yarn add react-app-rewired customize-cra，这个 react-app-rewired是什么?
	//由于我们用customize-cra执行config-overrides.js里的规则修改了脚手架，我们就不能再用脚手架里原来的命令，比如npm start等
	//补充：npm start是短命令，是react-scripts start的简写
	//此时我们就需要使用react-app-rewired这个库来启动脚手架。
	//简而言之：config-overrides.js里写的是规则；靠customize-cra这个库去执行修改；最后依靠react-app-rewired来启动。

	//我们需要在package.json里，把之前的"start":"react-scripts start"改成"start":"react-app-rewired start"
	//同样还要修改build,test，不用改eject

	//具体方式查看右侧导航："在creat-react-app中使用"里的高级配置（注意要选择3.x版本的Antd）。红色减号是不要的，绿色加号是要更新的。
	//明白原理后，直接看老师的笔记就行，在README里
	//注意，package.json里的不能有注释。

	//antd第三节课相关：2023-04-23更新：弹幕：5版本用ConfigProvider就可以。
	//如何修改主题颜色？比如从支付宝蓝改成别的颜色？你可以通过检察元素来看看antd使用了什么样式类名，然后自己写一个同名的，把颜色替换掉
	//但这样一是工作量太大，而且有时不一定能完全覆盖住antd的样式，因为人家也使用了权重。
	//正确的方式：找到antd底层的的那个主题颜色的变量，对其进行修改。
	//antd使用less写的，然后转换成css文件。所以我们需要做的是先找到less文件里的那个主题颜色，对其修改。
	//具体操作方式还是在antd3文档右侧导航条的:在creat-react-app中使用，然后在自定义主题里找到说明。或看老师的笔记
	//修改后要重启脚手架
	//需要注意的是，antd的文档不一定会及时更新，比如里面的用法需要依靠less等第三方。有时less更新了而antd的文档没更新，需要自己自己查看一下。

	//其他常用UI框架：Element(饿了么),Vant(移动端UI),以及国外的Material
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

				<DatePicker />
				<RangePicker />
			</div>
		)
	}
}
