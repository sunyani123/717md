const Mock=require('mockjs')
const {Random}=Mock
const fs=require('fs');
let res=Mock.mock({
	"success":1,
	"info":"请求成功",
	"code":1001,
	"list|10":[
		{
			"name":()=>Random.cword(2,5),
			"sonid":()=>Random.natural(1,99),
			"price":()=>Random.natural(1,6)
		}
	]
})
fs.writeFileSync('src/static/json/goods.json',JSON.stringify(res))