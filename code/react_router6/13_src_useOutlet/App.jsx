import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

import Header from './components/Header';

/*
    useOutlet：注意不要和Outlet组件搞混，useOutlet是个Hook
               用于呈现当前组件中渲染的嵌套路由组件
               比如我现在处于父组件A，我希望输出A下属的路由组件，就可以借助这个Hook
               详情见Home组件
    */

const App = () => {

    const elements = useRoutes(routes);
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