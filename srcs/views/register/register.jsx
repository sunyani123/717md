import React,{Component} from 'react'
import $http from '../../utils/http'
import './register.css'
class Register extends Component{
	constructor(){
		super()
		this.tologin=this.tologin.bind(this)
	}
	tologin(){
		console.log(this.refs.username.value);
		console.log(this.refs.password.value);
		$http.post('/register',{
			username:this.refs.username.value,
			password:this.refs.password.value
		})
		.then(res=>{
		console.log(res);
			if(res.success==1){
				this.props.history.push('/login')
			}
		})
	}
	render(){
		return <div className="Register">
			<p><span>用户名:</span><input type="text" className="username" ref="username"/></p>
            <p><span>密码:</span><input type="password" className="password" ref="password"/></p>
			<button onClick={()=>{this.tologin()}}>注册</button>
		</div>
	}
}
export default Register