import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
	//用于2_lazyLoad，需要包裹BrowserRouter
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root'))