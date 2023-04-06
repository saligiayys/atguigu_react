import About from '../pages/About';
import Home from '../pages/Home';
import { Navigate } from 'react-router-dom';

//路由表
// 老师这样写会报一个警告
// export default [
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
// ]

// 这样写警告就没了
const routes = [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
];

export default routes;