import { useNavigate, useInRouterContext } from 'react-router-dom';

const Header = () => {

    /*
        复习：在Router5里，一般组件如果想用于路由组件的三大属性history,match和location,需要依靠withRouter函数
              例如：export default withRouter(Header)
              在Router6里，无论是一般组件还是路由组件，一律使用useNavigate这个Hook
    */

    //测试useInRouterContext
    console.log('Header', useInRouterContext());

    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    const forward = () => {
        navigate(1);
    }

    return (
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router 6 Demo</h2>
                <button onClick={back}>⬅后退</button>
                <button onClick={forward}>前进→</button>
            </div>
        </div>
    )
}

export default Header;