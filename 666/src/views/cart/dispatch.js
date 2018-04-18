import {GOOD_LIST} from '../../store/reducer'
export default function mapDispatchToProps(dispatch){
	return {
		upgoodsdata(){
			fetch('/src/static/json/goods.json').then(res=>res.json()).then(res=>{
				dispatch({
					type:GOOD_LIST,
					data:res.list
				})
			})
		}
	}
}