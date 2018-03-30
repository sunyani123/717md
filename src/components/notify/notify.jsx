import React,{Component} from 'react'
import ReactDOM from 'react-dom'
class Notify extends Component{
	constructor(){
		super()
		this.openNotify=this.openNotify.bind(this)
		this.notifyStyle={
			position:'absolute'
		}
		this.state={
			isOpen:false
		}
		this.contentStyle={
			position:'absolute',
			left:'50%',
			top:'50%',
			transform:'translate3d(-50%,-50%,0px)',
			border:'1px solid pink',
			padding:'10px',
			width:'80%',
			background:'#fff'
		}
	}
	openNotify(){
		this.setState({
			isOpen:true
		})
	}
	render(){
		let {isOpen}=this.state
		return isOpen?(<div id="notify" style={this.contentStyle}>
			<div>sdfdgdfhfg</div>
		</div>):null
	}
}
function callback(fn){
	open(fn)
}
export function open(fn){
	console.log('打开提示组建');
	
}
class NotifyPortals extends Component{
	constructor(){
		super()
		this.state={
			isMounted:false,
			renderTo:document.body
		}
	}
	
	render(){
		let {isMounted,renderTo,isOpen}=this.state
		document.body.style={
			position:'absolute',
			top:'0',
			bottom:'0',
			width:'100%'
		}
		return isMounted?'':ReactDOM.createPortal(<Notify ref={(obj)=>{callback(obj?obj.openNotify:function(){})}}/>,renderTo)
	}
	componentDidMount(){
		let {container}=this.props
		let wrapperDOM=!container?document.body:null
		if(typeof container=='string'){
			let el=document.querySelector(container)
			el.style.cssText="position:relative"
			this.setState({
				renderTo:el
			})
		}else{
			console.log('目前只支持字符串');
		}
	}
}
export default NotifyPortals