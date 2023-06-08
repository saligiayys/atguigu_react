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
                                {/* 1.传递params参数，需要在路由表里配置占位符。这里就不能用outlet了，因为需要传参 */}
                                <Link to={`details/${message.id}/${message.title}/${message.content}`}>{message.title}</Link>
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