import { useResolvedPath } from "react-router-dom";

const News = () => {

    //测试useResolvedPath
    console.log("News", useResolvedPath());
    //{pathname: '/home/news', search: '', hash: ''}

    //可以随便写一个URL让其进行解析
    console.log("Test", useResolvedPath('/user?id=001&name=tom#qwe'));
    //{pathname: '/user', search: '?id=001&name=tom', hash: '#qwe'}

    return (
        <ul>
            <li>news001</li>
            <li>news002</li>
            <li>news003</li>
        </ul>
    )
}

export default News;