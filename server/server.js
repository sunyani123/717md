const express = require('express');
const bodyParser = require('body-parser');//是一个中间件
const api=require('./api')
const app=express()
app.use(bodyParser.json())
app.all('*',function(req,res,next){
    //服务端允许localhost:3000进行跨于
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Access-Control-Allow-Headers','Content-Type,Token')
    res.header('Content-Type',"application/json;charset=utf-8")
    next()
})

api(app)

app.listen(9000,function(){
    console.log('server listen 3000')
})