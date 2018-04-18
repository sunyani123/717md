import React,{Component} from 'react'
import dva,{connect} from 'dva'
//dva的api:dva model unmodel use router start
//创建程序
let app=dva({})
//准备数据（也是dva核心）
app.model({
	namespace:'count',
	state:{
		count:0,
		arr:[]
	},
	reducers:{
		add(state,action){
			
			return Object.assign({},state,{count:++state.count})
		}
	},
	effects:{
		*test(action,{call,put}){
			console.log(action)
			
			yield put({
				type:'add'
			})
		}
	}
})
class T extends Component{
	render(){
		return (<div>
				<h1 onClick={()=>this.props.dispatch({type:'count/add'})}>{this.props.count.count}</h1>
				<button onClick={()=>{this.props.dispatch({type:'count/test'})}}>test</button>
			</div>)
	}
}

let App=connect((state)=>({count:state.count}))(T)
app.router(()=><App/>)
app.start('#root')