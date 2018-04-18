import {combineReducers} from 'redux'
export const UPDATE_COUNT='UPDATE_COUNT'
export const GOOD_LIST='GOOD_LIST'
let initState={
	goods_list:[]
}
function goods_list(state=initState.goods_list,action){
	switch(action.type){
		case GOOD_LIST:
		return action.data
		break;
		case UPDATE_COUNT:
		let arr=[]
		arr=[...state];
		arr.forEach((item,index)=>{
			if(item.name==action.name){
				item.addcount=action.data
			}
		})
		return arr
	}
	
	return state
}
export default combineReducers({
	goods_list
})