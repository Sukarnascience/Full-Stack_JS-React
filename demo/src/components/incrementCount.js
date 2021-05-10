import React,{Component} from 'react'

class ClickCount extends Component{

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    increment(){
        this.setState({
            count:this.state.count + 1
        })
    }

    render(){
        return(
            <div>
                <p>You have clicked this button : {this.state.count}</p>
                <button onClick={()=>this.increment()}>Click</button>
            </div>
        )
    }
}

export default ClickCount;