import React,{Component} from 'react'
import {connect} from 'react-redux'
import './cart.css'
import mapStateToProps from './state'
import mapDispatchToProps from './dispatch'
import {UPDATE_GOODS_SELECTED} from '../../store/reducer'
console.log(mapDispatchToProps);
import CartItem from '../../components/cartitem/cartitem'
class Cart extends Component{
	constructor(){
		super()
		this.state={
			str:"all",
			edit:'编辑',
			givemoney:'结算'
		}
		this.cartEdit=this.cartEdit.bind(this)
		this.toDelGoods=this.toDelGoods.bind(this)
	}
	render(){
		let {totalConst,seelctAll,selectedAll}=this.props
		let {str,edit,givemoney}=this.state
		console.log(edit);
		return <div id="cart">
			<header><i className="iconfont icon-zuojiantou"></i><p>购物车</p><span onClick={this.cartEdit}>{edit}</span></header>
			<div className="goods_list">
				<ul>
					{
						this.props.cartList.map((item,index)=>{
							return <CartItem item={item} key={index}></CartItem>
						})
					}
				</ul>
			</div>
			<footer>
				<div className="footer-left">
					<span className={"icon-unchecked iconfont"+(seelctAll?' icon-select':'')} onClick={()=>{
							this.setState({
								str:str=='all'?'none':'all'
							})
						selectedAll(str)}}>
					</span><span>全选</span></div>
				<div className="footer-center"><span>合计:</span><span className="pricespn">￥<b>{totalConst}</b></span></div>
				<button className="footer-right" onClick={this.toDelGoods}>{givemoney}</button>
			</footer>
		</div>
	}
	cartEdit(){
		this.setState({
			edit:this.state.edit=='编辑'?'完成':'编辑',
			givemoney:this.state.edit=='编辑'?'删除':'结算'
		})
	}
	toDelGoods(){
		if(this.state.edit=='完成'){
			let selectedID=[];
			this.props.cartList.forEach(item=>{
				if(item.selected==1){
					selectedID.push(item.goods_id)
				}
			})
			console.log(selectedID,'地址');
			this.props.delCartGoods(selectedID)
		}
		
	}
	componentDidMount(){
		this.props.fetchGoodsList(this.props.history)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)