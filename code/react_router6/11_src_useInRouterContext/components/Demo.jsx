import { useInRouterContext } from "react-router-dom";

const Demo = () => {
    console.log("Demo", useInRouterContext());
    return (
        <div>我是Demo，不在Router的上下文中！</div>
    )
}

export default Demo;