import React,{Component} from 'react'
import './mine.css'
import {connect} from 'react-redux'
import mapStateToProps from './state'
class Mine extends Component{
	constructor(){
		super()
		this.toSetting=this.toSetting.bind(this)
		this.toDeliveryList=this.toDeliveryList.bind(this)
	}
	toDeliveryList(){
		this.props.history.push('/deliverList')
	}
	toSetting(){
		this.props.history.push('/setting')
	}
	render(){
		let {userInfo}=this.props
		console.log(userInfo);
		return <div id="mine">
			<header>
				<p><i className="iconfont icon-shezhi" onClick={this.toSetting}></i><b>我的717商城</b></p>
			</header>
			<dl  onClick={this.toSetting}>
				<dt><img src={require('../../static/img/1.png')}/></dt>
				<dd>{userInfo.name}</dd>
			</dl>
			<div className="tomyshop">
				<span className="iconfont icon-shouyedianpujishishangcheng"></span>
				<span>我的店铺</span>
				<i className="iconfont icon-gengduojiantou"></i>
			</div>
			<ul>
				<li>
					<span className="iconfont icon-fonts-shouye"></span>
					<span>账户管理</span>
					<i className="iconfont icon-gengduojiantou"></i>
				</li>
				<li onClick={this.toDeliveryList}>
					<span className="iconfont icon-fonts-shouye"></span>
					<span>地址管理</span>
					<i className="iconfont icon-gengduojiantou"></i>
				</li>
				<li>
					<span className="iconfont icon-fonts-shouye"></span>
					<span>联系客服</span>
					<i className="iconfont icon-gengduojiantou"></i>
				</li>
			</ul>
		</div>
	}
}
export default connect(mapStateToProps)(Mine)