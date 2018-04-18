export function getCookie(name){
	let cookieStr=document.cookie;
	if(cookieStr.length==0) return;
	let arr=[]
	let res=null
	if(cookieStr.indexOf(';')>-1){
		arr=cookieStr.split('; ')
		arr.forEach((cookie,index)=>{
			let temp_arr=cookie.split('=')
			if(temp_arr[0]==name){
				res=temp_arr[1]
			}
		})
	}else{
		let temp_arr=cookieStr.split('=')
		if(temp_arr[0]==name){
			res=temp_arr[1]
		}
	}
	return res
}
export function loginout(){
	let t=new Date()
	t.setTime(t.getTime()-1)
	document.cookie="token="+getCookie('token')+'; expires='+t.toUTCString()
}