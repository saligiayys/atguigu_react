import React, { Component,Fragment } from 'react'
//引入Fragment

export default class Demo extends Component {
	render() {
		return (//使用Fragment可以骗过jsx的语法检查。因为jsx要求必须要有一个根标签，但有时我们不希望使用太多无关的div使得html的结构太深。
				//Fragment会被react解析，最后丢掉。真实的html结构里不会存在
			// <div>
			<Fragment key={1}>
				<input type="text"/>
				<input type="text"/>
			</Fragment>
			// </div>

			//也可以使用空标签
			// <>
			// 	<input type="text"/>
			// 	<input type="text"/>
			// </>

			//但和Fragment是有区别的。比如在遍历的时候需要用到key。我们可以给Fragment指定key，但空标签不能写任何属性。
			//注意Fragment标签也只能接收key这个属性，否则会报错。因为该标签最终会在编译时被丢掉。
			//所以如果不需要遍历，只是简单的一个结构，可以使用空标签。否则使用Fragment标签。
		)
	}
}
