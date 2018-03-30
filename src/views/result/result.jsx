import React,{Component} from 'react'
import './result.css'
class Result extends Component{
    render(){
       return <h1 className="detail">this is Result page ......</h1>
    }
    componentDidMount(){
    console.log(15215315);
    	console.log(this.props.location.state);
    }
   
}
export default Result