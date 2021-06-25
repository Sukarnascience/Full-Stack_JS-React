import React, {Component} from 'react'
import MyHOCCounter from './firstCounter'

class HOCHoverCounter extends Component{
    render(){
        const {count,incrementCount} = this.props
        return <p onMouseOver={incrementCount}>You have clicked {count} times</p>
    }
}

export default MyHOCCounter(HOCHoverCounter);