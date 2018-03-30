import React,{Component} from 'react'
import './header.css'
class Header extends Component{
	constructor(){
		super()
		this.goBack=this.goBack.bind(this)
	}
	goBack(){
		this.props.history.go(-1)
	}
	render(){
		return <header className="header-header"><span onClick={this.goBack} className="iconfont icon-zuojiantou"></span><div className="childntag">{this.props.children}</div></header>
	}
}
export default Header