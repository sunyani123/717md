const fs=require('fs')
const jwt = require('jsonwebtoken');
const http=require('http');
const querystring=require('querystring');
const _ = require('lodash')

// function queryApi(url,methods,params){
// 	return new Promise((resolve,reject)=>{
// 		let data=''
// 		const options = {
// 		  hostname: 'www.lb717.com',
// 		  port: 80,
// 		  path: url,
// 		  method: methods,
// 		  headers: {
// 		    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
// 		  }
// 		};
// 		let request=http.request(options,(response)=>{
// 	        response.setEncoding('utf8');
// 	        response.on('data', (chunk) => {
// 	         data+=chunk;
	        
// 	        });
// 	        response.on('end', () => {
// 	          resolve(JSON.stringify(data));
// 	        });
// 	    })
// 	    if(methods.toLowerCase()=='post'){
// 	    	request.write(querystring.stringify(params))
// 	    }
// 	    request.end()
// 	})
// }
module.exports=function(app){
	const options = {
	  hostname: 'www.lb717.com',
	  port: 80,
	  path: '/mall/index/getGoodsChannel',
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
	  }
	};

	
	app.post('/mail/index/getGoodsChannel',function(req,res){
		// queryApi('/mail/index/getGoodsChannel','post',req.body)
		// .then((data)=>{
		// 	res.end(data)
		// })
	    let data="";
	    let request=http.request(options,(response)=>{
	        response.setEncoding('utf8');
	        response.on('data', (chunk) => {
	         data+=chunk;
	        
	        });
	        response.on('end', () => {
	          res.end(JSON.stringify(data));
	        });
	    })
	    request.write(querystring.stringify(req.body))
	    request.end()
	    //res.end返回的数据必须为字符串形式
	})


	//注册页接口
	app.post('/user/register',function(req,res){
	    let user=fs.readFileSync(__dirname+'/user.json',{encoding:'utf-8'})
	    user=JSON.parse(user);
	    user.push(req.body)
	    fs.writeFile(__dirname+'/user.json',JSON.stringify(user),function(){
	        res.end(JSON.stringify({
	            "success":1,
	            "info":"register sucess"
	        }))
	    })

	})
	//登录接口
	app.post('/user/login',function(req,res){
	    let user=fs.readFileSync(__dirname+'/user.json',{encoding:'utf-8'})
	    user=JSON.parse(user)
	    let login=req.body;
	    let resInfo={
	        success:0,
	        info:"用户名或密码错误",
	        token:''
	    }
	    user.forEach(user=>{
	        if(user.username==login.username&&user.password==login.password){
	            resInfo.success=1;
	            resInfo.info="login success",
	            resInfo.user={
	            	name:user.username,
	            	time:new Date().toLocaleTimeString(),
	            	nickName:'nizi'
	            }
	        }
	    })
	    console.log(resInfo);
	    if(resInfo.success==1){
	        resInfo.token=jwt.sign(login,'nizi',{
	            expiresIn:60*60
	        })
	    }
	     console.log(resInfo);
	    res.end(JSON.stringify(resInfo))
	})

	//添加购物车
	app.post('/user/Cart/addCart',function(req,res){
	    jwt.verify(req.body.token,'nizi',(err,decoded)=>{
	        
	        if(err){
	            res.end(JSON.stringify({
	                info:'登录过期,请重新登录',
	                detail:err.TokenExpiredError
	            }));
	        }else{
	            let cartInfo=JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
	            
	            if(cartInfo[decoded.username]){
	                let recordList=cartInfo[decoded.username]
	                let flag=false;//新添加的商品
	                recordList.forEach((item,index)=>{
	                    if(item.goods_id==req.body.goods_info.goods_id){
	                        ++item.count
	                        flag=true//重复商品
	                        console.log(flag);
	                    }
	                })
	                    if(!flag){
	                        let record=req.body.goods_info;
	                        record.count=1;
	                        record.selected=0;
	                        cartInfo[decoded.username].push(record)
	                    }
	                
	            }else{
	                let record=req.body.goods_info;
	                record.count=1;
	                record.selected=0;
	                cartInfo[decoded.username]=[record]
	            }
	            fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartInfo),function(){
	                res.end('1')
	            })
	        }
	    })
	    res.end('1')
	})

	//分类接口
	app.get('/mobile/Catagory/catagorySon',function(req,res){
	    let num = querystring.stringify(req.query).split('=')[1]
	    let goodArr=JSON.parse(fs.readFileSync(__dirname+'/meal.json',{encoding:'utf-8'}))['list'];
	    let thinglist=[]
	    goodArr.forEach((item,index)=>{
	    	item['goodslist'].forEach((itemlist,indexlist)=>{
	    		if(itemlist['sonid']==num){
	    			thinglist.push(itemlist)
	    		};
	    	})
	    })
	    res.end(JSON.stringify(thinglist))
	})


	//购物车登陆后的商品记录
	app.post('/user/Cart/Goodslist',function(req,res){
		console.log(req.body)
		jwt.verify(req.body.token,'nizi',(err,decoded)=>{
			if(err){
	            res.end(JSON.stringify({
	                info:'登录过期,请重新登录',
	                detail:err.TokenExpiredError,
	                error:1
	            }));
	        }else{
	        	console.log(decoded);
	        	// try{
	        		let goodsRecord=JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
	        		if(goodsRecord[decoded.username]){
	        			res.end(JSON.stringify(goodsRecord[decoded.username]))
	        		}
	        		// let goodsList=goodsRecord[decoded.username] || []
	        		// console.log();
	        		// res.json(JSON.stringify(goodsList))
	        	// }catch(error){
	        	// 	res.json('error')
	        	// }
	        }
		})	
	       
	        
	})
	//删除购物车指定商品
	app.post('/user/Cart/delGoods',function(req,res){
		console.log(req.body);
		let cartRecord=JSON.parse(fs.readFileSync(__dirname+'/cart_info.json',{encoding:'utf-8'}))
		jwt.verify(req.body.token,'nizi',function(err,decoded){
			if(err){
				res.json(err)
			}else{
				let cartList=cartRecord[decoded.username]
				let delGoods=_.remove(cartList,function(item){
					return req.body.selectedID.indexOf(item.goods_id)>-1
				})
				cartRecord[decoded.username]=cartList
				fs.writeFile(__dirname+'/cart_info.json',JSON.stringify(cartRecord),function(){
	                res.json({
						success:1,
						info:'删除成功',
						delGoods:delGoods,
						leftGoods:cartList
					})
	            })
				

			}
		})
	})
	//添加邮寄地址
	app.post('/user/Mail/addNew',function(req,res){
		jwt.verify(req.body.token,'nizi',function(err,decoded){
			if(err){
				res.json(err)
			}else{
				let user=decoded.username
				let delivery=JSON.parse(fs.readFileSync(__dirname+'/delivery.json',{encoding:'utf-8'}))
				
				if(delivery[user]){
					delivery[user].push(req.body)
				}else{
					delivery[user]=[req.body]
				}
				fs.writeFile(__dirname+'/delivery.json',JSON.stringify(delivery),function(err){
					if(err){
						res.json(err)
					}else{
						res.json({
							success:'1',
							info:'地址添加成功'
						})
					}
				})
			}
		})
	})
}