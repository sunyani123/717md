import React,{Component} from 'react'
import './catagory.css'
import $http from '../../utils/http'
class Catagory extends Component{
	constructor(){
        super()
        this.state={
        	activeindex:0,
        	contents:[]
        }
        this.toSearch=this.toSearch.bind(this)
        this.toggleActive=this.toggleActive.bind(this)
    }
    toSearch(){
        let {history}=this.props;
        history.push('/index/search')
    }
    toggleActive(index_id){
    	this.setState({
    		activeindex:index_id
    	})
    	$http.get('/mobile/Catagory/catagorySon',{sonid:index_id+1})
        .then(res=>{
        	this.setState({
        		contents:res
        	})
        })
    }
	render(){
		let {contents}=this.state
		let carList=['家乡味道','进口食品','牛奶乳品','休闲零食','生鲜果蔬','米面粮油','调味调料','酒水饮料'];
		return <div id="catagory">
					<header><span><input type="text" onFocus={this.toSearch} placeholder="请输入您要购买的商品"/></span></header>
					<div className="content">
							<div className="left-slide">
								<ul>
									{
										carList.map((item,index)=>{
											return <li className={this.state.activeindex==index?'actived':''} key={index} onClick={()=>{this.toggleActive(index)}}>{item}</li>
										})
									}
								</ul>
							</div>
							<div className="right-slide">
								{
									(contents.length>1)?contents.map((item,index)=>{
										return <dl key={index}><dt><img src={item.img}/></dt><dd>{item.name}</dd></dl>
									}):<p>暂无您所点击的商品</p>
								}
							</div>
					</div>
				</div>
	}	
}
export default Catagory