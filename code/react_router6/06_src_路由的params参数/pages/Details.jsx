import { useParams, useMatch } from "react-router-dom";

const Details = () => {
    //1.用useParams钩子来获取函数式路由组件的params参数
    /*
        回忆：
        在Router5里，路由组件的props里有history,location和match三大属性对象。
        传递参数的三种类型菲苾是：match.params，location.search，以及location.state。
        需要通过实例对象this.props.的方式拿到这些属性。
        但现在我们用的是函数式组件，需要借助useParams钩子来获取params参数
    */
    const a = useParams();
    console.log(a);//{id: '001', title: '消息1', content: '锄禾日当午，'}
    const { id, title, content } = useParams();

    /*
    补充，在5里，我们是通过this.props.match.params的方式拿到params参数的，如何在6里实现？
    需要借助另一个钩子，useMatch，但这个用的不多，了解即可。
    */
    const testMatch = useMatch('/home/message/details/:id/:title/:content');//必须写所需路径
    console.log(testMatch);//一大堆内容，里面包含了params
    console.log(testMatch.params);//{id: '001', title: '消息1', content: '锄禾日当午，'}
    //但如果只是为了获取params参数，直接使用useParams即可

    return (
        <ul>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}

export default Details;