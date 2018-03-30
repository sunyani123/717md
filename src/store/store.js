import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'

//createSagaMiddleware用于创建中间件
import createSagaMiddleware from 'redux-saga'
import reducers from './reducer'
//流程：ui=>action=>(middleware)=>reducer=>store


import sagas from './sagas'
let sagaMiddleware=createSagaMiddleware()

//applyMiddleware就是一个创建中间件
let store = createStore(reducers,applyMiddleware(logger),applyMiddleware(sagaMiddleware))

//在需要的时候run run函数其监听作用
sagaMiddleware.run(sagas)

export default store