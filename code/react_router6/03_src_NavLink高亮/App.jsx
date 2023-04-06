import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

// Router 6 自定义NavLik高亮

// 注意要解构赋值，因为className的那个函数的形参是一个对象，里面有isActive和isPending
const computedClassName = ({ isActive }) => {
    return isActive ? "list-group-item atguigu" : "list-group-item";
}

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
                        {/* NavLink的原理是点击后添加一个active的类名，正好对应Bootstrap的active
                            但在6里，之前的activeClassName被删除了，如果你想使用自定义类名，需要把className的值写成一个函数，且需要有返回值，返回值是css类名
                            这个函数在初次渲染模板的时候就会调用，且之后每次点击这个路由链接的时候，也会调用 */}
                        {/* <NavLink to="/about" className={() => { console.log(777) }}>About</NavLink> */}
                        {/* 可以看到一上来console就输出了777，每次点击也会输出777 */}

                        {/* <NavLink to="/about" className={(a) => { console.log(a) }}>About</NavLink> */}
                        {/* 可以看到a是一个对象{isAcive: true, isPending: flase} 老师讲的只有isActive，应该是版本不同。
                        被点击，则isActive为true，反之为false*/}

                        {/*{ isActive }是解构赋值，是从形参里结构赋值，形参里是上面说的那个对象{isActive,isPending}  */}
                        {/* <NavLink to="/about" className={({ isActive }) => { return isActive ? "list-group-item atguigu" : "list-group-item" }}>About</NavLink>
                        <NavLink to="/home" className={({ isActive }) => isActive ? "list-group-item atguigu" : "list-group-item"}>Home</NavLink> */}
                        {/* 第二行我用了箭头函数的简写 */}

                        {/* 但上面的代码太冗余了，我们可以提前在上面封装一个方法computedClassName() */}
                        <NavLink to="/about" className={computedClassName}>About</NavLink>
                        <NavLink to="/home" className={computedClassName}>Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            <Routes>
                                <Route path='/about' element={<About />} />
                                <Route path='/home' element={<Home />} />
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