import React, {Component} from 'react'
import MyHOCCounter from './firstCounter'

class HOCClickCounter extends Component{
    render(){
        const {count,incrementCount} = this.props
        return <button onClick={incrementCount}>You have clicked {count} times</button>
    }
}

export default MyHOCCounter(HOCClickCounter);