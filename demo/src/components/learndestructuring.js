//import React from 'react';
import React,{Component} from 'react';
/*
const LearnDestructuring = props => {
    const {firstName,lastName} = props;
    return(
        <div>
            <p>Hello {firstName} {lastName}</p>
        </div>
    );
}
*/
/*
const LearnDestructuring = ({firstName,lastName}) => {
    return(
        <div>
            <p>Hello {firstName} {lastName}</p>
        </div>
    );
}
*/

class LearnDestructuring extends Component{
    render(){
        const {firstName,lastName} = this.props
        //const {firstName,lastName} = this.state
        return(
            <div>
                <p>Hello {firstName} {lastName}</p>
            </div>
        )
    }
}

export default LearnDestructuring;