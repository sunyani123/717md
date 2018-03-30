import {combineReducers} from 'redux'
//添加购物车
export const ADD_CART='ADD_CART'
//删除购物车
//export const DELETE_CART="DELETE_CART"
//+-改变商品数量
export const UPDATE_GOODS_COUNT='UPDATE_GOODS_COUNT'
//商品的选中与非选中
export const UPDATE_GOODS_SELECTED='UPDATE_GOODS_SELECTED'
//用户信息
export const USER_INFO='USER_INFO'
//设置全选
export const SELECTED_ALL='SELECTED_ALL'
//更新整个商品列表
export const UPDATE_GOODS_LIST='UPDATE_GOODS_LIST'
let initState={
	cart_list:[],
	user_info:null,
	goods_list:[]
}

function user_info(state=initState.user_info,action){
	switch(action.type){
		case USER_INFO:
		return action.data
		break;
		default:
		return {

		}
	}
}
function goods_list(state=initState.goods_list,action){
	console.log(action);
	if(action.type=="TEST_SAGA"){
		console.log('66666666666666',action);
		return action.data
	}
	return state
}
function cart_list(state=initState.cart_list,action){
	switch(action.type){
		case ADD_CART:
			let flag=false;//新加的商品是购物车里没有的
			state.forEach((item,index)=>{
					if(item.goods_id==action.data.goods_id){
						++item.count
						flag=true
					}
				})
			return flag?[...state]:[...state,action.data]
		break;
		case UPDATE_GOODS_COUNT:
		let arr=[...state];
		arr.forEach(item=>{
			if(item.goods_id==action.id){
				item.count=action.data
			}
		})
		return arr
		break;
		case SELECTED_ALL:
		let arr3=[...state];
		let str=action.data
		arr3.forEach(item=>{
			item.selected=str=='all'?1:0
		})
		return arr3;
		break;
		case UPDATE_GOODS_SELECTED:
		let arr2=[...state];
		arr2.forEach(item=>{
			if(item.goods_id==action.id){
				item.selected=action.data
			}
		})
		return arr2;
		case UPDATE_GOODS_LIST:
		console.log(action.data);
			return action.data
		default :
		return state;
		
	}
	return state
}
export default combineReducers({
	cart_list,
	user_info,
	goods_list
})