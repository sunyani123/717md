import React,{Component} from 'react'
import CartItem from '../../components/cartitem/cartitem'
import {connect} from 'react-redux'
import mapStateToProps from './state'
import mapDispatchToProps from './dispatch'
import './cart.css'
class Cart extends Component{
	render(){
		let {goodslistdata,goodslist,allprice,selectedAll,checkedall}=this.props
		let arr;
		arr=goodslist?goodslist:[]
		return <div className="Cart-wrapper">
			<div className="cart-container">
				{
					arr.map((item,index)=>{
						return <CartItem data={item} key={index}></CartItem>
					})
				}
			</div>
			<div className="footer">
				<span onClick={()=>{checkedall(1-selectedAll)}} className={'iconfont '+((1-selectedAll)==0?'icon-select':'')}></span>
				总价<span>{allprice}</span>
			</div>
		</div>
	}
	componentDidMount(){
		let {goodslistdata,goodslist}=this.props
		goodslistdata()
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)