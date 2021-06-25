import React,{Component} from 'react';

class LearnEventHandler extends Component{

    changeDataOut(){
        console.log("event has been handled")
    }
    render(){
        return(<button onClick={this.changeDataOut}>Event Handler</button>)
    }
}

export default LearnEventHandler;