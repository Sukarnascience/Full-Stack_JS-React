import React,{Component} from 'react';
import MyPureComp from './MyPureComp';
import MyRegularComp from './MyRegularComp';
import MyMemoComp from './MyMemoComp';

class ParentOfPureRegular extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                count: 0
            })
        },2000)
    }
    render(){
        console.log("this is the Parent of pure and regular component")
        return(
            <div>
                <h3>Parent of pure and regular component</h3>
                <MyPureComp data={this.state.count}/>
                <MyRegularComp data={this.state.count}/>
                <MyMemoComp data = {this.state.count}/>
            </div>
        )
    }
}

export default ParentOfPureRegular;