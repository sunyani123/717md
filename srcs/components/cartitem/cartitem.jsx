import React,{Component} from 'react'
import {connect} from 'react-redux'
import mapStateToProps from './state'
import mapDispatchToProps from './dispatch'
import './cartitem.css'
class CartItem extends Component{
	render(){
		let {data,updatecount,updatechecked}=this.props
		return <div className="cartitem">
			<div className="wrap-left">
				<span onClick={()=>{updatechecked((1-data.selected),data.id)}} className={'iconfont '+(data.selected==0?'icon-select':'')}></span>
				<img src={data.img}/>
			</div>
			<div className="wrap-right">
				<p>{data.info}</p>
				<p>{data.price}</p>
				<p><button onClick={()=>updatecount(--data.count,data.id)}>-</button>{data.count}<button onClick={()=>updatecount(++data.count,data.id)}>+</button></p>
			</div>
		</div>
	}
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure:false})(CartItem)