import React,{Component} from 'react';

class MyRegularComp extends Component{
    render(){
        console.log("Regular Component is re-rendered")
        return(
            <p>This Regular Component has been re-render {this.props.data} (See in console)</p>
        )
    }
}

export default MyRegularComp;