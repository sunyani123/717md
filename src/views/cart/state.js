export default function mapStateToProps(state){
	//总价计算（遍历cartlist）
	let totalConst=0
	let seelctAll=true;//默认为全选
	state.cart_list.forEach((item,index)=>{
		if(item.selected==1){
			totalConst+=(item.discount_price*item.count)
		}
		if(item.selected==0){
			seelctAll=false
		}
	})
	return {
		cartList:state.cart_list,
		totalConst:totalConst,
		seelctAll
	}
}