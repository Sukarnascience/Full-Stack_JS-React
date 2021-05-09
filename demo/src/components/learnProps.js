import React from 'react';
//import React,{Component} from 'react';

const MyPropsFun = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hey {props.name} So, your age is :{props.age}</p>
            <p>{props.children}</p>
        </div>
    )
}
/*
class MyPropsFun extends Component{
    render(){
        return(
            <p>Hey {this.props.name} So, your age is :{this.props.age}</p>
            {this.props.children}
        )
    }
}
*/
export default MyPropsFun;