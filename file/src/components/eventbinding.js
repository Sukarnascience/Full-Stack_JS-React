import React,{Component} from 'react';

class Eventbindingdata extends Component{
    constructor(){
        super()
        this.state = {
            msg:"Hello"
        }
        //this.changeDataOut = this.changeDataOut.bind(this)
    }
    /*
    changeDataOut(){
        this.setState({
            msg:"hehee"
        })
    }*/
    changeDataOut = () => {
        this.setState({
            msg:"hehee"
        })
    }
    /*
    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <button onClick={this.changeDataOut.bind(this)}>Hi</button>
            </div>
        )
    }
    */
    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <button onClick={this.changeDataOut}>Hi</button>
            </div>
        )
    }
    /*
    render(){
        return(
            <div>
                <p>{this.state.msg}</p>
                <button onClick={()=>this.changeDataOut()}>Hi</button>
            </div>
                
        )
    }
    */
}

export default Eventbindingdata;