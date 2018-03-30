import React,{Component} from 'react'
import $http from '../../utils/http'
import SwiperComponent from '../../components/swiper/swiperComp'
import './home.css'
import Notify from '../../components/notify'
import GoodItem from '../../components/goodsComp/goodsComponent'
console.log(Notify);
// let img1=import('../../static/img/1.jpg')
class Home extends Component{
    constructor(){
        super()
        this.state={
            goodslist:[],
            channel_id:2,
            flag:true
        }
        this.toSearch=this.toSearch.bind(this)
        this.scrolling=this.scrolling.bind(this)
    }
    toSearch(){
        let {history}=this.props;
        history.push('/index/search')
    }
    render(){
     return (<div id="home" onScroll={this.scrolling} ref="scroller">
        <div ref="doc">
            <header className="header"><span><i className="iconfont icon-sousuo"></i><input type="text" onFocus={this.toSearch} placeholder="请输入您要购买的商品"/></span></header>
        <div className="main">
            <div className="swiper-wrapper"><SwiperComponent></SwiperComponent></div>
            <section className="home-cat">
                <dl>
                    <dt><img src={require('../../static/img/1.jpg')} alt=""/></dt>
                    <dd>家乡味道</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/2.jpg')} alt=""/></dt>
                    <dd>进口食品</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/1.jpg')} alt=""/></dt>
                    <dd>家乡味道</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/2.jpg')} alt=""/></dt>
                    <dd>进口食品</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/1.jpg')} alt=""/></dt>
                    <dd>家乡味道</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/2.jpg')} alt=""/></dt>
                    <dd>进口食品</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/1.jpg')} alt=""/></dt>
                    <dd>家乡味道</dd>
                </dl>
                <dl>
                    <dt><img src={require('../../static/img/2.jpg')} alt=""/></dt>
                    <dd>进口食品</dd>
                </dl>
            </section>
            <div className="goods-list">
                {
                    this.state.goodslist.map((item,index)=>{
                        return <GoodItem key={index} data={item} history={this.props.history}></GoodItem>
                    })
                }
            </div>
            <Notify container={'#index .content'}></Notify>
        </div>
        </div>
     </div>)
    }
    
    componentDidMount(){
        $http.post('/mail/index/getGoodsChannel',{channel_id:this.state.channel_id})
        .then(res=>{
            let datas=JSON.parse(res).data.data;
            console.log(datas);
            this.setState({
                goodslist:datas
            })
        })
    }
    scrolling(){
        if(this.state.channel_id>9) return;
        if(!this.state.flag) return;
        let scrollers=this.refs.scroller.scrollTop;
        let sw=this.refs.scroller.offsetHeight
        let dh=this.refs.doc.offsetHeight
        console.log(dh);
        console.log(dh-(scrollers+sw));
        if(dh-(scrollers+sw)<50){
            console.log(666666);
            this.setState({
                flag:false
            })
             this.setState({
                channel_id:++this.state.channel_id
             })
             let {goodslist}=this.state;
            $http.post('/mail/index/getGoodsChannel',{channel_id:this.state.channel_id})
            .then(res=>{
                let datas=JSON.parse(res).data.data;
                console.log(datas);
                this.setState({
                    goodslist:[...goodslist,...JSON.parse(res).data.data]
                })
                this.setState({
                    flag:true
                })
            })
        }
    }
}
export default Home

