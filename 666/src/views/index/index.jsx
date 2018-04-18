import 	React,{Component} from 'react'
import {Route,NavLink} from 'react-router-dom'
import RouterWrapper from '../../components/routerwrapper'
import './index.css'
class Index extends Component{
	render(){
		let {routes} = this.props
		return (
			<div className="index">
				<div className="content"><RouterWrapper routes={routes}></RouterWrapper></div>
				<ul className="ullist">
					<li><NavLink to="/index/home" activeClassName="active">首页</NavLink></li>
					<li><NavLink to="/index/cart" activeClassName="active">购物车</NavLink></li>
					<li><NavLink to="/index/mine" activeClassName="active">我的</NavLink></li>
					<li><NavLink to="/index/catacory" activeClassName="active">分类</NavLink></li>
				</ul>
			</div>
		)
	}
}
export default Index
