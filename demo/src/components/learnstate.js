import React,{Component} from 'react';

class MyStateFun extends Component{
    constructor(){
        super()
        this.state = {
            msg:"Give us a star"
        }
    }
    changeDataOut(){
        this.setState({
            msg:"Thanks Your for Liking me"
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <button onClick={()=>this.changeDataOut()}>Like me</button>
            </div>
                
        )
    }
}

export default MyStateFun;