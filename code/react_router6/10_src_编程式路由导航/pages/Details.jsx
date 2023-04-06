import { useLocation } from "react-router-dom";

const Details = () => {
    //2.用useLocation钩子来获取函数式路由组件的state参数
    /*
        回忆：
        在Router5里，路由组件的props里有history,location和match三大属性对象。
        传递参数的三种类型菲苾是：match.params，location.search，以及location.state。
        需要通过实例对象this.props.的方式拿到这些属性。
        但现在我们用的是函数式组件，需要借助?钩子来获取state参数
    */

    const a = useLocation();
    console.log(a);
    console.log(a.state);//state: {id: '001', title: '消息1', content: '锄禾日当午，'}

    // const { state } = useLocation();
    //复习一下连续解构赋值
    const { state: { id, title, content } } = useLocation();

    return (
        <ul>
            <li>
                <button >点我更新收到的search参数</button>
            </li>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}

export default Details;