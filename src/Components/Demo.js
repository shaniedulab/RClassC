import { Component } from "react"
import Paragraph from "./pragrapj";
class Demo extends Component{
    constructor(){
        super()
        this.state = {
            showParagraph:true, count:0
        }
    }
    
    componentDidMount(){
        console.log("componentDidMount");
    }
    
    componentDidUpdate(prevProps,prevState){
        // console.log("componentDidUpdate");
        // if(prevState.count != this.state.count){
        // this.setState({count:this.count})
        // }   
        throw new Error("wrong")    
        

    }
    
    taggleParagraph(){
        this.setState((currstate)=>{
            return {showParagraph:!currstate.showParagraph}
        })    
    }
    
    render(){
        return <>
        <h2>{this.props.name}</h2>
        {this.state.showParagraph &&<Paragraph></Paragraph>}
        <button onClick={this.taggleParagraph.bind(this)}>{this.state.showParagraph? 'Hide' :'Shaw'}</button>
        </>
    }
}

export default Demo