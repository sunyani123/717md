import {UPDATE_GOODS_COUNT,UPDATE_GOODS_SELECTED} from '../../store/reducer'
export default function mapDispatchToProps(dispatch){
	return {
		updateCount(count,id){
			dispatch({
				type:UPDATE_GOODS_COUNT,
				data:count,
				id:id
			})
		},
		selectItem(selected,id){
			dispatch({
				type:UPDATE_GOODS_SELECTED,
				data:selected,
				id
			})
		}
	}
}
