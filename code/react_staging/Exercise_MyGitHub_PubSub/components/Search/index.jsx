import React, {Component} from 'react';
import axios from "axios";
import PubSub from "pubsub-js";

class Search extends Component {

    search = () => {
        const {keywordElement:{value:keyWord}} = this;

        //更新状态
        PubSub.publish("atguigu", {isFirst:false,isLoading:true});

        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                //更新状态
                PubSub.publish("atguigu",{isLoading: false, users: response.data.items});
            },
            error => {
                //更新状态
                PubSub.publish("atguigu",{isLoading:false,err:error.message});
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