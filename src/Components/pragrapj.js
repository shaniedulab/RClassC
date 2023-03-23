import { Component } from "react"
import DemoContext from "../DemoContext";
class Paragraph extends Component{
    static contextType=DemoContext
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    // constructor(){
    //     super()
    //     this.state = {
    //         showParagraph:true, count:0
    //     }
    // }
    
    // componentDidMount(){
    //     console.log("componentDidMount");
    // }
    
    // componentDidUpdate(prevProps,prevState){
    //     console.log("componentDidUpdate");
    //     if(prevState.count != this.state.count){
    //     this.setState({count:this.count})
    //     }      
        
    // }
    
    // taggleParagraph(){
    //     this.setState((currstate)=>{
    //         return {showParagraph:!currstate.showParagraph}
    //     })    
    // }
    
    render(){
        return <>
        <h1>{this.context.value}</h1>
        
        {/* <DemoContext.Consumer>{(ctx)=>{
            return <h2>{ctx.value}</h2>
        }}</DemoContext.Consumer> */}
        
        {/* {this.state.showParagraph &&<h1>{this.props.children}</h1>}
        <button onClick={this.taggleParagraph.bind(this)}>{this.state.showParagraph? 'Hide' :'Shaw'}</button> */}
        </>
    }
}

export default Paragraph