import { useNavigationType } from "react-router-dom";

const News = () => {

    //默认是push跳转，如果在Home组件里给News的NavLink加上了replace属性，则变成replace跳转。刷新页面则输出POP
    console.log("News", useNavigationType());

    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
}

export default News;