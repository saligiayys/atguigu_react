import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

import Header from './components/Header';

/*
    useResolvedPath：给定一个URL值，解析其中的path,search和hash值。
                    简单说就是用来解析路径的，结果是一个对象，比如：{pathname: '/user', search: '?id=001&name=tom', hash: '#qwe'}
                    不一定是系统里有的，你可以随便写。
                    见News组件
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