import { Link, Outlet, useNavigate } from 'react-router-dom';
// 注意，大写的是组件，小写的是Hook函数
import { useState } from 'react';

const Message = () => {
    /* 
    需求：点击消息，展示内容
    回忆路由传参的三种方式：params, search和state

    */

    const [messages] = useState([
        { id: '001', title: '消息1', content: '锄禾日当午，' },
        { id: '002', title: '消息2', content: '汗滴禾下土。' },
        { id: '003', title: '消息3', content: '谁知盘中餐，' },
        { id: '004', title: '消息4', content: '粒粒皆辛苦。' },
    ]);

    const navigate = useNavigate();//返回一个函数
    console.log(navigate);//navigate是个函数可以做所有之前this.props.history能做的事情

    const showDetail = (message) => {
        // navigate('/about');//跳回about。注意别写成about，这样路径是/home/message/about

        //跳转到details。这里不能写/details，/是绝对路径相当于根路径pubulic文件夹(localhost)/details，不带/是相对于这个Message路径下的
        //该函数可以接收两个参数，第一个是路径，第二个是配置对象，这里传递的是state参数
        navigate('details', {
            replace: false,//这里是为了演示可以配置是否开启replace模式，默认就是false
            state: {//目前useNavigate只支持单独传递state参数对象，params和search参数直接写在navigate()第一个参数的路径里。
                id: message.id,//既然这里是message.id，那这个函数就要接收message参数，下面的showDetail就要携带message参数，因此需要写成()=>{showDetail(message)}的方式
                title: message.title,
                content: message.concat
            }
        });
        //useNavigate如何进行前进，后退等操作呢？见Header组件
    }

    return (
        <div>
            <ul>
                {
                    messages.map((message) => {
                        return (
                            <li key={message.id}>
                                {/* 3.传递state参数，和search参数一样，state参数也不需要在路由表里占位，直接在Details组件里接收*/}
                                <Link
                                    to="details"
                                    //在5里，我们是to={{pathname:''detail, state:{id:message.id}}}的方式进行传递的
                                    //在6里，to="路径"，另外单独写一个state属性
                                    state={{
                                        id: message.id,
                                        title: message.title,
                                        content: message.content
                                    }}
                                >{message.title}</Link>
                                <button onClick={() => { showDetail(message) }}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Message;