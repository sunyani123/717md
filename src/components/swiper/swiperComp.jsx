import React,{Component} from 'react'
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css";
class SwiperComponent extends Component{
    render(){
        return <div className="swiper-container" ref="scDom">
            <div  className="swiper-wrapper">
                <div className="swiper-slide"><img src={require('../../static/img/1.jpg')} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/2.jpg')} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/3.jpg')} alt=""/></div>
                <div className="swiper-slide"><img src={require('../../static/img/4.jpg')} alt=""/></div>
            </div>
        </div>
    }
    componentDidMount(){
        //new Swiper中this.refs.scDom的作用是获取到实际dom
        new Swiper(this.refs.scDom,{
            autoplay:true,
            loop:true
        })
    }
}
export default SwiperComponent