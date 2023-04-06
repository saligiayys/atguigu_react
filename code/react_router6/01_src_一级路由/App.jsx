import { NavLink, Routes, Route } from 'react-router-dom';
// 在6里，之前的Switch被新的Routes代替了。注意Routes和Route的区别！
//Routes具有Switch的功能，即一旦匹配到一个路由就停止。区别是以前的Switch可以不用，但Routes必须使用，否则报错。
//Routes相当于一个if语句，如果其路径与当前浏览器的url匹配，则呈现对应的组件
//且Route（没有s）是可以嵌套使用的。也可以配合useRoutes配置路由表，但需要通过<Outlet>组件来渲染其子路由
//注意：老师上课用的是路由表，没有用嵌套的方式，下面有一个嵌套的例子。平时开发推荐用路由表，容易维护
//例如：
/*
<Routes>
    <Route path='/home' element={<Home />}
        <Route path='test1' element={<Test1 />}</Route>
        <Route path='test2' element={<Test2 />}</Route>
    </Route>
</Routes>
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
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/home' element={<Home />} />
                                {/* 在6里，之前的component={About}被新的element={<About/>}代替了 */}
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;