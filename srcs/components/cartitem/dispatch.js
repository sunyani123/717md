import {GOODS_COUNT,GOODS_SELECTED} from '../../store/reducer'
export default function mapDispatchToProps(dispatch){
	return {
		updatecount(count,id){
			dispatch({
				type:GOODS_COUNT,
				data:count,
				id:id
			})
		},
		updatechecked(selected,id){
			dispatch({
				type:GOODS_SELECTED,
				data:selected,
				id:id
			})
		}
	}
}	