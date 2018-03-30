const Mock = require('mockjs');
const {Random}=Mock
const fs = require('fs')
let arr=['热销','套餐类','烧饼类','进店必买','酱肉类','凉菜类','糖类','饮料']
// Random.extend({ 
// 	mealType:()=>{
// 		let item=Random.pink(arr)
// 		let idx=arr.indexOf(item)
// 		let deleted=arr.splice(ids,1)
// 		return item
// 	}
// })
let res=Mock.mock({
	"success":1,
	"info":"请求成功",
	"code":1001,
	"list|8":[
		{
			"goodslist|6":[
				{
					"name":()=>Random.cword(2,5),
					"detail":()=>Random.cparagraph(),
					"price":()=>Random.natural(1,99),
					"sonid":()=>Random.natural(1,6),
					"img":()=>Random.image('100*100',Random.color(),"#fff","png","|")
				}
			]
		}
	]
})
fs.writeFileSync('server/meal.json',JSON.stringify(res))