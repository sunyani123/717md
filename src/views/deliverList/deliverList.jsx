import React,{Component} from 'react'
import './deliverList.css'
import Header from '../../components/header'
import Button from '../../components/button'
class DeliverList extends Component{
	constructor(){
		super()
		this.toConsignee=this.toConsignee.bind(this)
	}
	toConsignee(){
		this.props.history.push('/delivery')
	}
	render(){
		let {history}=this.props
		return <div className="deliverList">
			<header>
				<Header history={history}><h1>收货地址</h1></Header>
			</header>
			<section>目前没有邮寄地址</section>
			<Button onClick={this.toConsignee}><span className="iconfont icon-shezhi"></span>添加地址</Button>
		</div>
	}
}
export default DeliverList