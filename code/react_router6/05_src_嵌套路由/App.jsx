import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

/*
React6路由表的使用： (其实5的时候也能实现，但需要自己手动封装)
       <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/home' element={<Home />} />
            <Route path='/' element={<Navigate to="/about" />} />
        </Routes>
可以看出，除了path和element的值是不一样的以外，其他结构都是一致的。
我们想在一个钩子里，集中配置path和element的值，然后再由这个钩子，生成一个完整的路由结构，包括最外侧的Routes
我们在这个钩子里配置的这些不一样的值，或规则，就称为路由表。这个钩子叫做useRoutes
注意：实际开发中，我们会把路由表单独放在要给文件夹里:routes，方便统一管理
*/

const App = () => {
    // useRoutes的参数是一个数组，每一个元素对应着一个路由。每一个路由都是一个对象，里面有path和element两个属性
    // const elements = useRoutes([
    //     // 路由表
    //     {
    //         path: '/about',
    //         element: <About />
    //     },
    //     {
    //         path: '/home',
    //         element: <Home />
    //     },
    //     {
    //         path: '/',
    //         element: <Navigate to='/about' />
    //     }
    //     // end 路由表
    // ])

    // 注意：实际开发中，我们会把路由表单独放在要给文件夹里:routes，方便统一管理
    //根据引入的路由表，生成对应的路由规则
    const elements = useRoutes(routes);
    /*
    注意useRoutes和Outlet的区别！
    useRoutes：根据路由表，动态创建<Routes>和<Route>
    Outlet:当<Route>产生嵌套时，渲染其对应的后续子路由。相当于一个标记，用来标记子路由的出口。
    */

    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header">
                        <h2>React Router 6 Demo</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        <NavLink to="/about" className="list-group-item">About</NavLink>
                        {/* <NavLink to="/home" className="list-group-item">Home</NavLink> */}
                        <NavLink to="/home" end className="list-group-item">Home</NavLink>
                        {/* 细节：之前点击Home下的子路由时，Home和被点击的子路由会同时高亮，
                        这是因为内部做了处理，简单说就是子亮父也亮。
                        可以通过添加标签属性end来关闭，这样点击Message或News后，只有Message或News高亮(一般很少用) */}
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