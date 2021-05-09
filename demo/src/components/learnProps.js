import React from 'react';
//import React,{Component} from 'react';

const MyPropsFun = (props) => {
    console.log(props)
    return (
        <p>Hey {props.name} So, your age is :{props.age}</p>
    )
}
/*
class MyPropsFun extends Component{
    render(){
        return(
            <p>Hey {this.props.name} So, your age is :{this.props.age}</p>
        )
    }
}
*/
export default MyPropsFun;