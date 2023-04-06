import { NavLink, useRoutes, useInRouterContext } from 'react-router-dom';
import routes from './routes';

import Header from './components/Header';

/*
    useInRouterContext：用于判断组件是否在<Router>的上下文中，是则返回true，否则返回false
    简单来说，在index.js里，<App>被<BrowserRouter>包括住，则App本身以及其所有子组件都属于在<Router>上下文中,
    无论是一般组件还是路由组件！

    有什么用？某些第三方组件的开发者，需要知道你是不是在路由环境中使用他开发的组件。
 */

const App = () => {

    //测试useInRouterContext
    const test = useInRouterContext();
    console.log("App", test);//true

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