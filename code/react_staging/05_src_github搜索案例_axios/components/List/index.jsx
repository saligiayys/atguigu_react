import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const { users, isFirst, isLoading, err } = this.props
		return (
			<div className="row">
				{	//jsx里的{}只能写js表达式，也就是不能写if语句。
					//但这里需要进行判断，所以我们需要使用三元表达式！但这里需要嵌套。。。
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
						isLoading ? <h2>Loading......</h2> :
							//err初始值是""空字符串，在js里空串是false。所以这里有个Bug：发生一次错误后，这里没有清除上次错误信息，因此会一直显示错误	
							err ? <h2 style={{ color: 'red' }}>{err}</h2> :
								users.map((userObj) => {
									//html_url，login，avatar_url记不住的话去开发者工具里看
									//在map遍历的的最外侧结构上加上key。可以直接用用户身上的id
									return (
										<div key={userObj.id} className="card">{/* 注意是给map遍历的最外侧标签加上key */}
											{/* 如果使用了target="_blank"但没写rel="noreferrer"脚手架会警告，所以听从脚手架加上了这个属性 */}
											<a rel="noreferrer" href={userObj.html_url} target="_blank">
												{/* 
												同样，img不写alt属性也会有警告。此外脚手架还会警告alt不要叫picture,photo等名字
												tips:还有img的url，老师在分割静态页面的时候，是可以随便百度一个图片然后把链接放在这里的哦(注意不要有base64编码就好)
												 */}
												<img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
											</a>
											<p className="card-text">{userObj.login}</p>
										</div >
									)
								})
				}
			</div >
		)
	}
}
