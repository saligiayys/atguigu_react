import { Navigate } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Message from '../pages/Message';
import News from '../pages/News';
import Details from '../pages/Details';

//路由表
const routes = [
    {
        path: '/about',
        element: <About />
    },
    {
        path: 'home',//  ‘/’可以不写
        element: <Home />,
        //二级路由，也是一个数组，每个元素代表一个子路由，每个子路由都是一个对象，里面也是path和element属性
        children: [
            {
                //在Router5里，二级路由需要把所有父级路由的路径也写上比如：/home/news，在这里就只写子路由本身即可
                //注意：在Home组件里复习了三种路径形式，但这里也不能用./news的形式，不知道为什么？？
                path: 'news',
                element: <News />
            },
            {
                //父级路由home的路径可以写成/home或home,
                //但子路由只能写成/home/message或message，不能写成/message
                //因为/是绝对路径，表示不管你现在在哪里，直接从/message开始匹配
                //也就是路径会变成这样：localhost:3000/message，而我们要的是localhost:3000/home/message
                path: '/home/message',
                element: <Message />,
                children: [
                    {
                        // 2. Search参数不需要占位符，保持原样即可
                        path: 'details',
                        element: <Details />
                    }
                ]
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
];

export default routes;