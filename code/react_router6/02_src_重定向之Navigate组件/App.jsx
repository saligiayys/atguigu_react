import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
/*
在6里，之前的Switch被新的Routes代替了。注意Routes和Route的区别！
Routes具有Switch的功能，即一旦匹配到一个路由就停止。区别是以前的Switch可以不用，但Routes必须使用，否则报错。
在6里，之前用来重定向的Redirect被新的Navigate替换了。
*/
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
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
                        {/* 编写路由链接 */}
                        <NavLink to="/about" className="list-group-item">About</NavLink>
                        <NavLink to="/home" className="list-group-item">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {/* <Routes caseSensitive> */}
                            {/* 可以指定匹配时是否区分大小写，默认为false */}
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/home' element={<Home />} />
                                {/* 在6里，之前的component={About}被新的element={<About/>}代替了 */}
                                {/* <Route path='/' element={<Home />} />为啥不直接这么写呢？看Home组件 */}
                                <Route path='/' element={<Navigate to="/about" />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;