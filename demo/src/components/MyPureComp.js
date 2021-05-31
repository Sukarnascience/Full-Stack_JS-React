import React,{PureComponent} from 'react';

class MyPureComp extends PureComponent{
    render(){
        console.log("Pure Component is re-rendered")
        return(
            <p>This Pure Component has been re-render {this.props.data} (See in console)</p>
        )
    }
}

export default MyPureComp;