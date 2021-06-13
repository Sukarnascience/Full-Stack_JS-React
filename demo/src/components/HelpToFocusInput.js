import React, { Component } from 'react'

class MyInput extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    focusMyInput(){
        this.inputRef.current.focus()
    }

    render(){
        return(
            <div>
                <p>Refs Child</p>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default MyInput