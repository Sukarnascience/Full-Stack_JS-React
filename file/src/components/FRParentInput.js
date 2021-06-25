import React,{Component} from 'react'
import FRInput from './FRInput';

class FRParentInput extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    clickMe = ()=>{
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <p>Forward Refs</p>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickMe}>foward ref</button>
            </div>
        )
    }
}

export default FRParentInput; 