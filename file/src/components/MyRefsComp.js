import React,{Component} from 'react';

/*
  there are 2 ways to do this 
  1st way is: React.createRef()
  2nd way is: callback ref
*/

class MyRefsComp extends Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        /*
        this.callBackRef = null
        this.setCBRef = (element) =>{
            this.callBackRef = element
        }
        */
    }

    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
        /*
        if(this.callBackRef){
            this.callBackRef.focus()
        }
        */
    }

    next = () =>{
        alert(this.inputRef.current.value)
    }

    render(){
        return(
            <React.Fragment>
                <p>Want to say someting before starting:</p>
                <input text="text" ref={this.inputRef}/>
                {/*<input text="text" ref={this.setCBRef}/>*/}
                <button onClick={this.next}>next</button>
            </React.Fragment>
        )
    }
}

export default MyRefsComp;