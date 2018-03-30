import React,{Component} from 'react'
import './Setting.css'
import {loginout} from '../../utils/utils'
import Alertbox from '../alertbox/alertbox'

class Setting extends Component{
	constructor(){
		super()
		this.state={
			flag:false
		}
		this.logoout=this.logoout.bind(this)
		this.tomine=this.tomine.bind(this)
		this.close=this.close.bind(this)
		this.toalertbox=this.toalertbox.bind(this)
	}
	close(){
		this.setState({
             flag:true
        })
	}
	toalertbox(){
		loginout()
		this.props.history.push('/index/home')
	}
	logoout(){
		this.setState({
             flag:true
        })
		
	}
	tomine(){
		this.props.history.push('/index/mine')
	}
	render(){
		let {flag}=this.state
		return <div id="Setting">
			<header><i onClick={this.tomine} className="iconfont icon-zuojiantou"></i><p>设置</p></header>
			{
				flag&&<Alertbox close={this.close} toalertbox={this.toalertbox} history={this.props.history} info="您确定要退出吗？？"></Alertbox>
			}
			<button onClick={this.logoout}>退出登录</button>
		</div>
	}
}
export default Setting