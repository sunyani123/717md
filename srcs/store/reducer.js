import {combineReducers} from 'redux'
export const GOODS_LIST = "GOODS_LIST"
export const GOODS_COUNT = "GOODS_COUNT"
export const GOODS_SELECTED = "GOODS_SELECTED"
export const SELECTED_ALL = "SELECTED_ALL"

function goodslist(state=[],action){
	switch(action.type){
		case GOODS_LIST:
		return action.data;
		break;
		case GOODS_COUNT:
		let arr=[...state]
		arr.map((item,index)=>{
			if(item.id==action.id){
				if(action.data<0){
					action.data=0;
				}
				if(action.data>=20){
					action.data=20;
				}
				item.count=action.data
			}
		})
		return arr;
		case GOODS_SELECTED:
		let arr2=[...state]
		arr2.map((item,index)=>{
			if(item.id==action.id){
				item.selected=action.data
			}
		})
		return arr2
		break;
		case SELECTED_ALL:
		let arr3=[...state]
		arr3.map((item)=>{
			item.selected=action.data
		})
		return arr3
		break;
		default:
		return state
	}

}
export default combineReducers({
	goodslist
})