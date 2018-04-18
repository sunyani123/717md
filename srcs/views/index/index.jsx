import React,{Component} from 'react'
import {NavLink,Route} from 'react-router-dom'
import WrapperRouter from '../../components/routerwrapper'
import './index.css'
class Index extends Component{
	render(){
		let {routes} = this.props
		return <div className="index-wrapper">
			<div className="router">
				<WrapperRouter routes={routes}></WrapperRouter>
			</div>
			<div className="nav">
				<NavLink to="/index/home">主页</NavLink>
				<NavLink to="/index/cata">分类页</NavLink>
				<NavLink to="/index/cart">购物车</NavLink>
				<NavLink to="/index/mine">我的</NavLink>
			</div>
		</div>
	}
}
export default Index