import React,{Component} from 'react'
import './detail.css'
class Deatil extends Component{
    render(){
       return <h1 className="detail">this is Deatil page</h1>
    }
    componentDidMount(){
    	console.log(this.props.location.state.state);
    }
}
export default Deatil