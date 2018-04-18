import React,{Component} from 'react'
import $http from '../../utils/http'
class Login extends Component{
	constructor(){
		super()
		this.alerinfo=this.alerinfo.bind(this)
	}
	alerinfo(){
		$http.post('/login',{
			username:this.refs.username.value,
			password:this.refs.password.value
		})
		.then(res=>{
			console.log(res);
			document.cookie="token="+res.token
		})
	}
	render(){
		return <div className="Login">
			<input ref="username" username="请输入您的用户名"/>
			<input ref="password" password="请输入您的密码"/>
			<button onClick={this.alerinfo}>登录</button>
		</div>
	}
}
export default Login