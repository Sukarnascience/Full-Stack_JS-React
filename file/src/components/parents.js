import React,{Component} from 'react';
import Childern from './childern';

class Parents extends Component{
    constructor(props){
        super()
        this.state = {
            defmsg:"Dear,"
        }
        this.callpopupalert = this.callpopupalert.bind(this)
    }
    callpopupalert(msg){
        alert(`Hello ${this.state.defmsg} ${msg}`)
    }
    /*
    callpopupalert(){
        alert(`Hello ${this.state.defmsg}`)
    }
    */
    render(){
        return(
            <div>
                {/*<button onClick={()=>this.callpopupalert('sj')}/>*/}
                {/*<button onClick={this.callpopupalert}>test</button>*/}
                <Childern popupalert = {this.callpopupalert}/>
            </div>
        )
    }
}

export default Parents;