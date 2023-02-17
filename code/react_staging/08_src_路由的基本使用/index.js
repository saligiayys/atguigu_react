//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入BrowserRoute
import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'

ReactDOM.render(

	//一劳永逸的办法，是用BrowserRouter标签包裹住index.js里的App组件！！！
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)