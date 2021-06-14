import React,{Component} from 'react'

export class UserName extends Component{
    render(){
        return(
            <div>Name is : {this.props.name()}</div>
        )
    }
}

export class IsUserName extends Component{
    render(){
        return(
            <div>{this.props.name(true)}</div>
        )
    }
}

class CounterRenderProps extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    incrementCount = () =>{
        this.setState(prevState=>{
            return{count:prevState.count+1}
        })
    }
    render(){
        return(
            <div>
                {this.props.render(this.state.count,this.incrementCount)}
            </div>
        )
    }
}

export default CounterRenderProps;