import React,{Component} from 'react'
import $http from '../../utils/http'
import {connect} from 'react-redux'
import mapDispatchToProps from './dispatch'
import './login.css'
import {Link} from 'react-router-dom'
class Login extends Component{
	constructor(){
        super()
        this.tologin=this.tologin.bind(this)
    }
    render(){
        return <div id="login">
            <h1>登录页面</h1>
            <p><Link to="/register">注册</Link></p>
            <p><span>用户名:</span><input type="text" className="username" ref="username"/></p>
            <p><span>密码:</span><input type="password" className="password" ref="password"/></p>
            <h2><button onClick={this.tologin}>登录</button></h2>
        </div>
    }
    tologin(){
        let {username,password}=this.refs
        $http.post('/user/login',{
            username:username.value,
            password:password.value
        }).then(res=>{
        	console.log(res);
        	 if(res.success==1){
                //将用户信息在store里面存储
                this.props.saveUser(res.user)
                //把用户信息存储一份到localStorage中
                localStorage.setItem('user-info',JSON.stringify(res.user))
                //登陆成功后判断要跳转的页面
	        	document.cookie="token="+res.token
                //this.props.location.state.from'/index/home'
                let from = this.props.location.state?this.props.location.state.from || 'index/home': 'index/home'
	        	this.props.history.replace(from)
	        }else{
	        	console.log('登陆出错');
	        }
        })
    }
}
export default connect(null,mapDispatchToProps)(Login)