import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

import Header from './components/Header';

/*
回顾前面的三个参数：
useParams：返回当前匹配路由的params参数，相当于5的match.params，直接返回对象
useSearchParams：用于读取和修改当前位置URL中的查询字符串，返回一个包含两个值的数组[search和setSearch]
                 需要通过search.get('')的方式获取值
useLocation：获取当前location信息，相当于5的location属性
useMatch：返回当前匹配信息，相当于5的match属性
为什么没有useHistory?因为有useNavigate了！！
因为history在5里用于编程式路由导航，我们在6里使用的是useNavigate

编程式路由导航，重要！
假设：鼠标滑过一张图片时，跳转到指定组件
分析：因为是鼠标滑过，因此无法使用Link或NavLin，因为不需要点击。
     也不能用Navigate，因为Navigate只要被渲染，就会切换视图，无论你鼠标滑过与否
     因此只依靠这些内置组件是不够的。
     在Router 5中，我们依赖this.props.history里的push,replace,go,goBack等方式来操作。
     但Router 6中，我们使用函数式组件，没有this了。
     我们怎么办呢？我们需要使用useNavigate这个钩子。看Message组件

案例：在每个消息后面添加一个按钮：点我查看详情来渲染Details组件，而不是点击Link
    

 */

const App = () => {
    const elements = useRoutes(routes);
    //需求：把React Router 6 Demo包装成一个一般组件。并添加按钮控制前进和后退

    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 编写路由链接 */}
                        <NavLink to="/about" className="list-group-item">About</NavLink>
                        {/* <NavLink to="/home" className="list-group-item">Home</NavLink> */}
                        <NavLink to="/home" end className="list-group-item">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {elements}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;