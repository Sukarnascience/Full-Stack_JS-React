import React,{Component} from 'react'

class MyCondition extends Component {
    constructor(){
        super()
        this.state={
            permiton:true
        }
    }
    render(){

        /*
        if(this.state.permiton){
            return <p>wow you are allowed</p>
        } else{
            return <p>oops you are not allowed</p>
        }
        */

       /*
       let msg
       if(this.state.permiton){
           msg = <p>wow you are allowed</p>
       } else{
           msg =  <p>oops you are not allowed</p>
       }
       return(
           <div>{msg}</div>
       )
       */

       /*
       return(
           this.state.permiton ? <p>wow you are allowed</p> : <p>oops you are not allowed</p>
       )
       */

       return(
           this.state.permiton && <p>wow you are allowed</p>
       )
    }
}

export default MyCondition;