import {takeEvery,takeLatest} from 'redux-saga'
import {call,put} from 'redux-saga/effects'
import $http from '../utils/http'
console.log($http);
//saga就是一些generator函数 下面就是generator函数
function* fetchDate(){
	//是用call去请求数据,call(fn,params)==>call的原理为fn(params)
	//实现异步转同步
	try{
		console.log('数据请求成功');
		let res = yield call($http.post,'/mail/index/getGoodsChannel',{channel_id:3})
		console.log(res);
		//saga中替代dispatch来触发action的函数
		yield put({
			type:'TEST_SAGA',
			data:JSON.parse(res)
		})
	}
	catch(err){
		yield put({
			type:'TEST_SAGA_ERROR',
			data:err
		})
	}
}

export default function* watchFetch(){
	//监听每一个type为GET_GOODS_LIST的action
	yield takeEvery(['GET_GOODS_LIST'],fetchDate)
}