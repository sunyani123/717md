const express = require('express');
const bodyParser = require('body-parser');//是一个中间件
// const api=require('./api')
const app=express()
const fs=require('fs')
const jwt = require('jsonwebtoken');
const http=require('http');
const querystring=require('querystring');
const _ = require('lodash')
app.use(bodyParser.json())
app.all('*',function(req,res,next){
    //服务端允许localhost:3000进行跨于
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Access-Control-Allow-Headers','Content-Type,Token')
    res.header('Content-Type',"application/json;charset=utf-8")
    next()
})

//获取购物车数据
app.post('/goodslist',function(req,res){
	console.log('6666666666');
	let carinfo=JSON.parse(fs.readFileSync(__dirname+'/data.json',{encoding:'utf-8'}))
	console.log(carinfo);
	res.json(carinfo)
})

//注册页面
app.post('/register',(req,res)=>{
    let userinfo=JSON.parse(fs.readFileSync(__dirname+'/user.json',{encoding:'utf-8'}))
    userinfo.push(req.body)
    fs.writeFile(__dirname+'/user.json',JSON.stringify(userinfo),()=>{
        res.end(JSON.stringify({
            "success":1,
            "info":"登陆成功"
        }))
    })
})

//登陆页面
app.post('/login',(req,res)=>{
    let userinfo=JSON.parse(fs.readFileSync(__dirname+'/user.json',{encoding:'utf-8'}))
    let alerinfo={
        "success":0,
        "info":"登录失败",
        "token":""
    }
    userinfo.map((item,index)=>{
        if(item.username==req.body.username&&item.password==req.body.password){
            alerinfo.success=1
            alerinfo.info="登陆成功"
        }
    })
    if(alerinfo.success==1){
        alerinfo.token=jwt.sign(req.body,'nizi',{
            expiresIn:60*60
        })
    }
    res.json(alerinfo)
})
// api(app)

app.listen(9000,function(){
    console.log('server listen 3000')
})