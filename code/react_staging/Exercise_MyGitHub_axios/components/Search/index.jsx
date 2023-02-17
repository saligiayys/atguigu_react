import React, {Component} from 'react';
import axios from "axios";

class Search extends Component {

    search = () => {
        const {keywordElement:{value:keyWord}} = this;

        //更新状态
        this.props.updateAppState({isFirst:false,isLoading:true});

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // console.log("成功了！",response);
                // console.log("成功了！",response.data);
                // this.props.saveUsers(response.data.items);//数据在items里
                //更新状态
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                // console.log("失败了！",error);
                //更新状态
                this.props.updateAppState({isLoading:false,err:error.message});
            }
        )


    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}

export default Search;