import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    // 进一步了解Navigate，需求：在Home组件里添加一个按钮，使sum的值变为2，当sum的值为2时，跳转到About组件
    //Navigate只要渲染，就会修改路径，引起视图的切换。
    //一定要写to，否则报错。
    //Navigate默认push跳转，但它还能接收一个参数replace来设置replace跳转,默认为false

    const [sum, setSum] = useState(1);

    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum === 2 ? <Navigate to="/about" replace={false} /> : <h4>Sum的值为：{sum}</h4>}
            <button onClick={() => { setSum(2) }}>点我把sum变成2</button>
        </div>
    )
}

export default Home;