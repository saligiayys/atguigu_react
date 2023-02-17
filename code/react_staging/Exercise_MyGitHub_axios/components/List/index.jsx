import React, {Component} from 'react';

import "./index.css";

class List extends Component {
    render() {

        const {users,isFirst,isLoading,err} = this.props;

        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用！请输入后开始搜索，注意不要输入中文，因为GitHub用户名没有中文！</h2> :
                    isLoading ? <h2>正在搜索中...</h2> :
                    err ? <h2 style={{color:"red"}}>{err}</h2> :
                    users.map(userObj => {
                        return (
                            <div key={userObj.id} className="card">
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img alt="profile" src={userObj.avatar_url} style={{width:"100px"}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default List;