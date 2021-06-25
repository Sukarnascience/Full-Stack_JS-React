import React, { Component } from 'react'
import MyInput from './HelpToFocusInput'

class FocusInput extends Component{
    constructor(props){
        super(props)
        this.componentRef = React.createRef()
    }

    clickMe = ()=>{
        this.componentRef.current.focusMyInput()
    }

    render(){
        return(
            <React.Fragment>
                <MyInput ref={this.componentRef}/>
                <p>Refs Parent</p>
                <button onClick={this.clickMe}>sift focus</button>
            </React.Fragment>
        )
    }
}

export default FocusInput