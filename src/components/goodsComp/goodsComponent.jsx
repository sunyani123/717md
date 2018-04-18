import React,{Component} from 'react'
import $http from '../../utils/http'
import Lazyload from 'react-lazyload'
import './goodslist.css'
import {getCookie} from '../../utils/utils'
console.log(getCookie('token'));
import {connect} from 'react-redux'
import {ADD_CART} from '../../store/reducer'
class PlaceholderComponent extends Component{
    render(){
        return <img src={require('../../static/img/1.jpg')}/>
    }
}
class GoodsItem extends Component{
    constructor(){
        super()
        this.addCart=this.addCart.bind(this)
    }
    addCart(e){
        e.stopPropagation()
        let {data}=this.props
        console.log(data)
        if(getCookie('token')){
            $http.post('/user/Cart/addCart',{
            goods_id:data.goods_id,
            goods_info:data,
            token:getCookie('token')
            })
            .then((res)=>{
                if(res==1){
                    openNotify('从法国高等工程的出场时的')
                    this.props.dispatch({
                        type:ADD_CART,
                        data:{
                            ...data,
                            count:1,
                            selected:0
                        }
                    })
                }else{
                    let {history,location}=this.props
                    history.push('/login',{
                        form:location.pathname
                    })
                }
            })
        }else{
            this.props.history.push('/login',{
                from:'/index/home'
            })
        }
    }
    toDetail(goods_id){
        this.props.history.push('/detail?goods_id='+goods_id,{
            state:goods_id
        })
    }
    render(){
        let {data}=this.props
        return <div className="goods-list-wrap">
            <dl onClick={()=>{this.toDetail(data.goods_id)}}>
                <dt>
                    <img src={'http://www.lb717.com/'+data.obj_data}/>
                    </dt>
                <dd>
                    <p className="goods-detail">{data.goods_name}</p>
                    <p><span className="goods-price">￥{data.discount_price}</span><span onClick={this.addCart} className="iconfont icon-gouwuche"></span></p>
                </dd>
            </dl>
        </div>
    }
}
export default connect(null)(GoodsItem)