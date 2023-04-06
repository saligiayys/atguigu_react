import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';

import Header from './components/Header';

/*
    useInRouterContext：用于判断你是通过哪种跳转方式来的当前路由组件的，POP,PUSH，REPLACE
    我们之前学过PUSH和REPLACE。POP的意思是，你通过PUSH或REPLACE来到一个路由组件后，点击了刷新，在浏览器中直接打开了这个路由组件。
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