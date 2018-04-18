import 	React,{Component} from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './state'
import CartItem from '../../components/cartItem/cartItem'
import FooterItem from '../../components/footeritem/footerItem'
import './cart.css'
class Cart extends Component{
	render(){
		let {goods_list}=this.props
		let arr;
		arr=goods_list?goods_list:[]
		return (
			<div className="Cart">
				<div className="goodsItem">
					{
						arr.map((item,index)=>{
							return <CartItem key={index} data={item}></CartItem>
						})
					}
				</div>
				<div className="footerItem"><FooterItem></FooterItem></div>
			</div>
		)
	}
	componentDidMount(){
		this.props.upgoodsdata()
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
