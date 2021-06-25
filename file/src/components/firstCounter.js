import React,{Component} from 'react'

const MyHOCCounter = WrappedComponent=>{
    class MyHOCCounter extends Component{
        constructor(props){
            super(props)
            this.state = {count:0}
        }
        incrementCount = () => {
            this.setState(prevState =>{
                return {count:prevState.count+1}
            })
        }
        render(){
            return(
            <WrappedComponent 
            count = {this.state.count} 
            incrementCount = {this.incrementCount}
            />
            )
        }
    }
    return MyHOCCounter
}

export default MyHOCCounter;