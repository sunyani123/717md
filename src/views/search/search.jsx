import React,{Component} from 'react'
import './search.css'
import {connect} from 'react-redux'
class Search extends Component{
    constructor(){
        super()
        this.state={
            historylist:[]
        }
        this.toSearch=this.toSearch.bind(this)
        this.toResult=this.toResult.bind(this)
        this.clearLocalStorage=this.clearLocalStorage.bind(this)
        this.testSaga=this.testSaga.bind(this)
    }
    toSearch(){
        if(!this.refs.keyWords.value) return;
        let keywords=this.refs.keyWords.value
        let ls=localStorage;
        if(ls.getItem('searchvalue')){
            let thingsArr=JSON.parse(ls.getItem('searchvalue'))
            if(thingsArr.indexOf(keywords)>-1)return;
            thingsArr.push(keywords)
            ls.setItem('searchvalue',JSON.stringify(thingsArr))
            console.log(ls);
        }else{
            ls.setItem('searchvalue',JSON.stringify([this.refs.keyWords.value]))
        }
        this.props.history.push('/index/result',{
            keywords:this.refs.keyWords.value
        })
    }
    toResult(keywords){
        this.props.history.push('/index/result',{
            key_words:keywords
        })
    }
    clearLocalStorage(){
        localStorage.removeItem('searchvalue');
        this.setState({
            historylist:[]
        })
    }
    testSaga(){
        this.props.dispatch({
            type:'GET_GOODS_LIST'
        })
    }
    render(){
        let {goodsList}=this.props
        console.log(goodsList);
        return <div id="search">
            <header><span><input type="text" placeholder="请输入您要购买的商品" ref="keyWords"/></span><button onClick={this.toSearch}>搜索</button></header>
            <section className="recent-search">
                <p>最近搜索<span className="iconfont icon-shouye" onClick={this.clearLocalStorage}></span></p>
                {this.state.historylist.length==0?<p>暂无搜索记录</p>:
                    <ul>
                        {
                            this.state.historylist.map((item,index)=>{
                                return <li onClick={()=>{this.toResult(item)}} key={index}>{item}</li>
                            })
                        }
                    </ul>
                }
            </section>
            <section className="common-search">
                <p>大家都在搜</p>
                <ol>
                    <li>点我测试saga中间件</li>
                    <li onClick={this.testSaga}>牛奶</li>
                </ol>
                <p>通过saga请求数据,将异步专为同步,并且渲染结果：{goodsList.data&&goodsList.data.data[0].goods_name}</p>
            </section>
        </div>
    }
    componentDidMount(){
        if(localStorage.getItem('searchvalue')){
            this.setState({
                historylist:JSON.parse(localStorage.getItem('searchvalue'))
            })
        }
    }
}
export default connect(function(state){
    return {
        goodsList:state.goods_list
    }
},null,null,{pure:false})(Search)
