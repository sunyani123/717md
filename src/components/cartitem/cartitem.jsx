import React,{Component} from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from './dispatch'
class CartItem extends Component{
	constructor(){
		super()
	}
	render(){
		let {updateCount,selectItem}=this.props
		let {item}=this.props
		console.log(item.selected);
		return (<li>
						<div  className="iconspn" onClick={()=>{selectItem((1-item.selected),item.goods_id)}}><span className={"icon-unchecked iconfont "+(item.selected==0?"icon-unchecked iconfont":"icon-unchecked iconfont icon-select")}></span></div>
						<div  className="imgspn"><span><img src={'http://www.lb717.com/'+item.obj_data}/></span></div>
						<div className="right-cart">
							<div className="ptag"><p>{item.goods_name}</p></div>
							<div className="cartnum">
								<div className="cart-left">
									<p>X{item.count}</p>
									<p>￥{item.discount_price}</p>
								</div>
								<div className="cart-right">
									<span onClick={()=>{updateCount(--item.count,item.goods_id)}}>-</span>
									<span>{item.count}</span>
									<span onClick={()=>{updateCount(++item.count,item.goods_id)}}>+</span>
								</div>
							</div>

						</div>
					</li>)
	}
}
export default connect(function(state){
	return {}
},mapDispatchToProps,null,{pure:false})(CartItem)