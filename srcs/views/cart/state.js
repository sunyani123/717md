export default function mapStateToProps(state){
	let selectedAll=0
	let allprice=0
	let arr=state.goodslist
	arr.map(item=>{
		if(item.selected==0){
			allprice+=item.count*item.price
		}
		if(item.selected==1){
			selectedAll=1
		}
	})
	console.log(selectedAll);
	return {
		goodslist:state.goodslist,
		allprice,
		selectedAll:1-selectedAll
	}
}