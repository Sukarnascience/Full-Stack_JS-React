import React,{Component} from 'react'

export class RunRenderPropCount extends Component{
    render(){
        const {count,counter} = this.props
        return(
            <div>
                <p>render counter from props</p>
                <button onClick={counter}>You have clicked - {count}</button>
            </div>
        )
    }
}

export default RunRenderPropCount;