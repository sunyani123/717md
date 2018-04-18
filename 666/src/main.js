import 	React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Redirect,Switch,BrowserRouter,Route} from 'react-router-dom'
import RouterWrapper from './components/routerwrapper'
import router from './router'
import './static/css/reset.css'
import './static/css/common.css'
import store from './store/store'
import {Provider} from 'react-redux'
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/index/cart"></Redirect>
				<RouterWrapper routes={router.routes}></RouterWrapper>
			</Switch>
		</BrowserRouter>
	</Provider>,document.querySelector('#root')
) 