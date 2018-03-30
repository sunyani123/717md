import React,{Component} from 'react'
import $http from '../../utils/http.js'
import './register.css'
import {Link} from 'react-router-dom'
class Register extends Component{
    constructor(){
        super()
        this.toRegister=this.toRegister.bind(this)
    }
    render(){
        return <div id="register">
            <h1>注册页面</h1>
            <p><span>用户名:</span><input type="text" className="username" ref="username"/></p>
            <p><span>密码:</span><input type="password" className="password" ref="password"/></p>
            <h2><button onClick={this.toRegister}>注册</button></h2>
        </div>
    }
    toRegister(){
        let {username,password}=this.refs
        $http.post('/user/register',{
            username:username.value,
            password:password.value
        }).then(res=>{
            if(res.success==1){
                this.props.history.push('/login')
            }
        })
    }
}
export default Register