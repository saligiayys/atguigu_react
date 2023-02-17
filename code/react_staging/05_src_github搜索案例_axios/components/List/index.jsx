import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {users,isFirst,isLoading,err} = this.props
		return (
			<div className="row">
				{	//jsx里的{}只能写js表达式，也就是不能写if语句。
					//但这里需要进行判断，所以我们需要使用三元表达式！但这里需要嵌套。。。
					isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
					isLoading ? <h2>Loading......</h2> :
						//err初始值是""空字符串，在js里空串是false
					err ? <h2 style={{color:'red'}}>{err}</h2> :
					users.map((userObj)=>{
						//html_url，login，avatar_url记不住的话去开发者工具里看
						//在map遍历的的最外侧结构上加上key。可以直接用用户身上的id
						return (
							<div key={userObj.id} className="card">
								<a rel="noreferrer" href={userObj.html_url} target="_blank">
									<img alt="head_portrait" src={userObj.avatar_url} style={{width:'100px'}}/>
								</a>
								<p className="card-text">{userObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
