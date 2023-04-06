import { useSearchParams, useLocation } from "react-router-dom";

const Details = () => {
    //2.用useSearchParams钩子来获取函数式路由组件的search参数
    //此外，也可以用useLocation获取search参数，因为在5里，是通过this.props.location.search获取到search参数的
    /*
        回忆：
        在Router5里，路由组件的props里有history,location和match三大属性对象。
        传递参数的三种类型菲苾是：match.params，location.search，以及location.state。
        需要通过实例对象this.props.的方式拿到这些属性。
        但现在我们用的是函数式组件，需要借助useSearchParams钩子来获取search参数
    */
    const a = useSearchParams();
    console.log(a);//[URLSearchParams, ƒ] 结果是一个数组
    //这里类似useState()钩子，需要通过一个数组来接收，一个是search，另一个是setSearch
    const [search, setSearch] = useSearchParams();
    console.log(search);//URLSearchParams {}  发现结果并不是一个可以被直接使用的参数对象
    //需要调用search身上的get()并指定你要取哪个参数
    console.log(search.get('id'));//001
    console.log(search.get('title'));//消息1
    console.log(search.get('content'));//锄禾日当午,

    const id = search.get('id');
    const title = search.get('title');
    const content = search.get('content');

    //测试useLocation
    const x = useLocation();
    console.log(x);//里面有一大堆属性，其中就有search，类似上节课学的,useMatch
    console.log(x.search);//是一个字符串，需要处理

    //setSearch用于更新你收到的search参数，用的不多，了解即可
    //参数：完整的字符串形式的search参数
    const changeSearch = () => {
        //路径会变成：http://localhost:3000/home/message/details?id=008&title=哈哈&content=嘻嘻哈哈
        setSearch('id=008&title=哈哈&content=嘻嘻哈哈');
    }

    return (
        <ul>
            <li>
                <button onClick={changeSearch}>点我更新收到的search参数</button>
            </li>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}

export default Details;