import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
    //了解即可，使用率不高。
    search = async () => {
        //获取用户的输入(连续解构赋值+重命名)
        const { keyWordElement: { value: keyWord } } = this
        //发送请求前通知List更新状态
        PubSub.publish('atguigu', { isFirst: false, isLoading: true })

        //#region 发送网络请求---使用axios发送
        /* axios.get(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                //请求成功后通知List更新状态
                PubSub.publish('atguigu',{isLoading:false,users:response.data.items})
            },
            error => {
                //请求失败后通知App更新状态
                PubSub.publish('atguigu',{isLoading:false,err:error.message})
            }
        ) */
        //#endregion

        //发送网络请求---使用fetch发送（未优化）
        //fetch返回一个Promise对象
        /* fetch(`/api1/search/users2?q=${keyWord}`).then(
            response => {
                console.log('联系服务器成功了');  //因为这一步获得的那个response里，没有我们要的数据。是fetch的关注分离思想。
                                               //也就是先联系一下服务器，看看能不能联系成功。成功了再拿数据
                                               //所谓的关注分离，就是不会一下子就把数据给你！
                return response.json() //.then所指定的成功的回调函数的返回值，是一个promise实例对象（看下面的注释）
                //这就是为什么.then可以链式调用。因为.then的返回值依然是一个promise实例。但这个promise实例是成功的还是失败的呢？看下面复习
                //复习promise规则：
                    1.如果.then所指定的成功的回调函数，或失败所指定的回调函数的返回值是一个非promise值，那外侧的这个.then所返回的那个promise实例的状态就是成功的，值就是所返回的非promise值。 
                    2.如果返回的是一个promise值，那就把这个promise值作为外侧.then所返回的那个promise实例的值。
                        也就是如果这个primise值是一个成功的promise实例，且里面保存的数据是1，则外侧.then所返回的那个promise实例状态就是成功，值为1
            },
            error => {
                console.log('联系服务器失败了',error);//这里只有在断网等情况下才会失败。即使你的url是错误的，但也会成功联系到服务器。只不过状态码是4xx，资源无法找到
                //也就是说，你联系服务器成功与否，和服务器能否响应在fetch里是两码事。因为既然能返回4xx错误码，或200成功码，是因为服务器告诉你咋回事了，也就是你联系到服务器了，但能不能处理请求不一定。
                //因此如同上面说的，只有断网了，才会显示失败
                return new Promise(()=>{})
                //如果断网，error这里没有return，则会默认返回undefined，undefined是非Promise的值，这个.then所返回的Promise实例的状态是成功的，值为undefined
                //然后下面会输出：获取数据成功了。这明显不合理，因为如果联系服务器失败，就不应该继续向下走了！
                //因此需要return new Promise(()=>{})来中断Promise链
                //原理是传入一个初始化的Promise对象，其状态为pending，既不是成功，也不是失败，因此不会继续。
                //为啥不传一个失败的Promise对象？因为根据fetch关注分离原则，上面已经联系服务器不成功了，就不应该有获取这个动作了。
            }
                //response的原型上有一个json方法（不是window内置的JSON，两码事）。通过该方法可以获得一个Promise对象，显示pending，我们需要的数据就藏在这个对象里
                //如果联系服务器成功，且数据也获取成功，返回一个成功的Promise实例对象
                //如果联系服务器成功，但数据获取失败，返回一个失败的Promise实例对象
                //因此，这里return这个Promise的实例对象，也就是第一个.then的回调有了返回值。然后可以进行promise的.then链式调用。
                //复习：之所以可以链式调用，是因为.then的返回值依然是一个Promise实例
                //复习看：ES6
        ).then(
            response => {console.log('获取数据成功了',response);},
            error => {console.log('获取数据失败了',error);}
        ) */

        //发送网络请求---使用fetch发送（优化）
        //优化，统一处理错误，使用catch，而不是一而再地.then.then
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json()
        //     }
        // ).then(
        //     response => {
        //         console.log('获取数据成功了', response);
        //     }
        // ).catch(
        //     error => {
        //         console.log('请求出错', error);
        //     })

        //发送网络请求---使用fetch发送（进一步优化）
        //error用catch步骤了，那成功也就可以不需要.then了
        //使用await和async而不是.then。 看ES8
        //在最上面的search后面(距离await最近的函数体加上async)：search = async () => {} 包裹这里的代码
        try {
            //await只能等到成功Promise的结果，失败的用try-catch
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)//含义：本次链接是否成功？
            const data = await response.json()//成功再把数据交给你
            console.log(data); //data返回的是对象，数据在items里。之前用axios时是：users:response.data.items
            PubSub.publish('atguigu', { isLoading: false, users: data.items })//需要通过data.items来在List里调用map方法，否则报错，因为data是对象，而data.items才是数组
        } catch (error) {
            console.log('请求出错', error);
            PubSub.publish('atguigu', { isLoading: false, err: error.message })
        }

        //因此，所谓的关注分离，就是不是一下子就把数据给你

        //小细节：以前在Chrome浏览器开发者工具的Network选项卡里只有XHR，因为那会Fetch还不存在。现在已经变成Fetch/XHR了（火狐目前还是XHR,截至2023-02-21）
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}

