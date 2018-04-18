import {UPDATE_COUNT} from '../../store/reducer'
export default function mapDispatchToProps(dispatch){
	return{
		updatecount(count,name){
			dispatch({
				type:UPDATE_COUNT,
				data:count,
				name:name
			})
		}
	}
}