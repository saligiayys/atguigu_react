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
我们想在一个路由表里，集中配置path和element的值，然后再由一个钩子，生成一个完整的路由结构，包括最外侧的Routes
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
                        <NavLink to="/home" className="list-group-item">Home</NavLink>
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