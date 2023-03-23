import { Component } from "react";

class ErrorBoundry extends Component{
constructor(){
    super();
    this.state={haserror: false}
}

componentDidCatch(error){
    this.setState({haserror:true})
}

render(){
if(this.state.haserror){
    return <h1>som wrong</h1>
}
    return this.props.children;
}

}

export default ErrorBoundry;