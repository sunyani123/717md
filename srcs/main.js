import React,{Component} from 'react'
import {Provider} from 'react-redux'
import store from './store/store'
import ReactDOM from 'react-dom'
import WrapperRouter from './components/routerwrapper'
import {BrowserRouter,Redirect,exact,Switch} from 'react-router-dom'
import router from './router/routers'
import './static/css/reset.css'
import './static/css/common.css'
import './static/font/iconfont.css'
ReactDOM.render(<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/index/cart"></Redirect>
				<WrapperRouter routes={router.routes}></WrapperRouter>
			</Switch>
		</BrowserRouter>
	</Provider>,document.querySelector('#root'))