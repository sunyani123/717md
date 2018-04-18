import 	React,{Component} from 'react'
import {Route} from 'react-router-dom'
class RouterWrapper extends Component{
	render(){
		let {routes}=this.props
		console.log(routes);
		return (
			routes.map((item,index)=>{
				return <Route key={index} path={item.path} render={(location)=>{
					return <item.component {...location} routes={item.children}></item.component>
				}}></Route>
			})
		)
	}
}
export default RouterWrapper
