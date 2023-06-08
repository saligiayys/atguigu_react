import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

//二级路由(嵌套路由)
//我们之前学习了路由表，因此我们开始在路由表里配置二级路由

/*
        注意Outlet和useRoutes的区别：
                useRoutes用于注册路由(路由树)
                Outlet只用于嵌套路由里渲染子路由，用于标记子路由的"出口"
                个人总结：useRoutes首次用，Outlet用于嵌套时渲染
                官网解释：
                An <Outlet> should be used in parent route elements to render their child route elements. 
*/
const Home = () => {
    return (
        <div>
            <h2>我是Home的内容</h2>
            <div>
                <ul className='nav nav-tabs'>
                    <li>
                        {/* 编写路由链接 */}
                        {/* 这里也可以直接写news，但注意不能写成/news，要么news，要么/home/news，因为/是绝对路径，如果写成/news会变成localhost/news*/}
                        {/* 
                        路径相关复习。三种形式： 
                                1.to='news' -》相对路径     路径：localhost:3000/home/news   
                                2.to='/news' -》绝对路径    路径：locahost:3000/news
                                3.to='./news' -》相对路径   路径：localhost:3000/home/news
                                        其实也就是news和./news一样
                         */}
                        <NavLink className='list-group-item' to='news'>News</NavLink>
                    </li>
                    <li>
                        <NavLink className='list-group-item' to='/home/message'>Message</NavLink>
                    </li>
                </ul>
                {/* 注册路由 */}
                {/* 在5里，我们是把注册路由的规则直接写在了这里，即规则写在哪里，路由组件就渲染在哪里。
                但我们现在使用了路由表，里面的内容只规定了哪个路径要渲染哪个组件，但没有指定要在哪里渲染。
                我们需要一个标记，告诉路由表在哪里渲染子路由，这是也是6里的新功能：Outlet(类似Vue的RouterView) 
                这被称为：路由占位符
                用Outlet指定子路由组件渲染的位置。注意Outlet是给子路由用的，而elements是给一级路由用的！
                 */}

                <Outlet />
            </div>

        </div>
    )
}

export default Home;