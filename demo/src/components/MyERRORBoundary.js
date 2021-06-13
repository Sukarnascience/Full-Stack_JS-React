import React,{Component} from 'react'

class MyERRORBoundary extends Component{
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

    render(){
        if(this.state.hasError){
            return <p>Ooops! Something went wrong</p>
        }
        return this.props.children
    }
}

export default MyERRORBoundary;