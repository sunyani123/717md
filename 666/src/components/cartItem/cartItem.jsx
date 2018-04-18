import React,{Component} from 'react'
import {connect} from 'react-redux'
import mapDispatchToProps from './dispatch'
import mapStateToProps from './state'
import './cartitem.css'
class CartItem extends Component{
	constructor(){
		super()
		this.state={
			flag:'checked'
		}
		this.changecount=this.changecount.bind(this)
	}
	changecount(name,count){
		localStorage.setItem('goodscount',[])
		let {data}=this.props
		fetch('/src/static/json/goods.json').then(res=>res.json()).then(res=>{
			let datas=res.list
			datas.map((item,index)=>{
				if(item.name==name){
					item.addcount=count
				}
			})
			localStorage.setItem('goodscount',datas)
		})
		
	}
	render(){
		let {data,updatecount}=this.props
		let ls=localStorage.getItem('goodscount');
		return <div className="cartItem">
			<dl>
				<span className="checkedwrapper" onClick={()=>{this.state.flag=="checked"?this.setState({
					flag:'unchecked'
				}):this.setState({
					flag:'checked'
				})}}>{this.state.flag}</span>
				<dt><img src={"/src/static/img/"+data.imgs+".jpg"}/></dt>
				<dd>
					<p>{data.name}</p>
					<p className="price">￥{data.price}</p>
					<button onMouseUp={this.changecount(data.name,data.addcount)} onClick={()=>{updatecount(--data.addcount,data.name)}}>-</button>
					<span>{data.addcount}</span>
					<button  onClick={()=>{updatecount(++data.addcount,data.name)}}>+</button>
				</dd>
			</dl>
		</div>
	}
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure:false})(CartItem)