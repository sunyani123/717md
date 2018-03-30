import React,{Component} from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './store/store'
//router相关引入
import router from './router/router.config'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import RouteWrapper from './components/routeWrapper'
//font set & common style set
import fontset from './utils/fontset'
import './static/font/iconfont.css'
import './static/css/reset.css'
import './static/css/common.css'
    ReactDOM.render(<Provider store={store}>
    		<BrowserRouter>
	            <Switch>
	                <Redirect exact from='/' to="/index/home"></Redirect>
	                <RouteWrapper routes={router.routes}></RouteWrapper>
	            </Switch>
        	</BrowserRouter>
    	</Provider>,document.querySelector('#root'))