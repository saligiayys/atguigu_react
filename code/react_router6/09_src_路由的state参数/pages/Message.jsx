import { Link, Outlet } from 'react-router-dom';
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