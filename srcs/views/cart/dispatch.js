import {GOODS_LIST,SELECTED_ALL} from '../../store/reducer'
import $http from '../../utils/http'
export default function mapDispatchToProps(dispatch){
	return {
		goodslistdata(){
			$http.post('/goodslist',{}).then(res=>{
				dispatch({
					type:GOODS_LIST,
					data:res
				})
			})
		},
		checkedall(selected){
			dispatch({
				type:SELECTED_ALL,
				data:selected==0?1:0
			})
		}
	}
}