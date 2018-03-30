import React,{Component} from 'react'
import './consignnee.css'
import propTypes from 'prop-types'
import Header from '../../components/header'
import Button from '../../components/button'
import $http from '../../utils/http.js'
import {getCookie} from '../../utils/utils'
class Input extends Component{
	constructor(){
		super()
		this.getVal=this.getVal.bind(this)
	}
	render(){
		return <input type="text" placeholder={this.props.placeholder} onChange={this.getVal}/>
	}
	getVal(e){
		this.props.onChange(e.target.value)
	}
}
class Select extends Component{
	constructor(){
		super()
		this.getVal=this.getVal.bind(this)
	}
	getVal(e){
		console.log(e.target.value);
		this.props.onChange(e.target.value)
	}
	render(){
		return <select name="" onChange={this.getVal}>
			<option value="北京">北京</option>
			<option value="上海">上海</option>
			<option value="天津">天津</option>
			<option value="重庆">重庆</option>
		</select>
	}
}
Input.propTypes={
	onChange:propTypes.func.isRequired
}
Select.propTypes={
	onChange:propTypes.func.isRequired
}
class Consignee extends Component{
	constructor(){
		super()
		this.tosave=this.tosave.bind(this)
		this.inputChange=this.inputChange.bind(this)
		this.name=""
		this.phone=""
		this.address=""
	}
	inputChange(a,b){
		this[a]=b
	}
	tosave(){
		console.log(this.name);
		console.log(this.phone);
		console.log(this.address);
		console.log(this.province);
		console.log(this.city);
		console.log(this.region);
		let reg_exp_name=/([A-Za-z\d\u4e00-\u9fa5]+)$/g;
		let reg_exp_phone=/^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
		if(!reg_exp_phone.test(this.phone)){
			alert('请输入手机号');
			return;
		}
		if(!this.address){
			alert('请输入地址');
			return;
		}
		if(!this.province||!this.city||!this.region){
			alert('请输入省市区');
			return;
		}
		$http.post('/user/Mail/addNew',{
			name:this.name,
			phone:this.phone,
			address:this.address,
			province:this.province,
			city:this.city,
			region:this.region,
			token:getCookie('token')
		}).then((res)=>{
			console.log(res);
		})

	}
	render(){
		return <div className="Consignee">
			<Header history={this.props.history}><h1>添加邮寄地址</h1></Header>
			<section>
				<p><Input placeholder="收获人姓名" onChange={(val)=>this.inputChange('name',val)}/></p>
				<p><Input placeholder="手机号" onChange={(val)=>this.inputChange('phone',val)}/></p>
				<Select onChange={(val)=>this.inputChange('province',val)}></Select>
				<Select onChange={(val)=>this.inputChange('city',val)}></Select>
				<Select onChange={(val)=>this.inputChange('region',val)}></Select>
				<p><Input placeholder="详情地址" onChange={(val)=>this.inputChange('address',val)}/></p>
			</section>
			<Button onClick={this.tosave}>保存</Button>
		</div>
	}
}
export default Consignee