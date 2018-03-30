 import React,{Component} from 'react'
import './alertbox.css'
class Alertbox extends Component{
	constructor(){
		super()
		this.surefn=this.surefn.bind(this)
		this.dispearfn=this.dispearfn.bind(this)
	}
	surefn(){
		this.props.toalertbox()
	}
	dispearfn(){
		this.props.close()
		this.props.history.push('/index/mine')
	}
	render(){
		return <div className="alertbox">
			<dl>
				<dt>{this.props.info}</dt>
				<dd><span onClick={this.surefn}>确定</span><span onClick={this.dispearfn}>取消</span></dd>
			</dl>
		</div>
			
	}
}
export default Alertbox