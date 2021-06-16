import React,{Component} from 'react'
import axios from 'axios'

class HTTPGetFetch extends Component{
    constructor(props){
        super(props)
        this.state = {
            FetchData:[],
            ErrorInFetch:false
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(responce=>{
            this.setState({FetchData:responce.data})
        })
        .catch(error=>{
            this.setState({ErrorInFetch:true})
            console.log(error)
        })
    }
    render(){
        const {FetchData,ErrorInFetch} = this.state
        if(ErrorInFetch){
            return <p>Ooops!,Someting went wrong... sorry</p>
        }
        else{
            return(
                <div>
                    <h3>List of fetch data :</h3>
                    <ul>
                    {
                        FetchData.length ? 
                        FetchData.map(post=><li key={post.id}>{post.title}</li>) : <li>-NA-</li>
                    }
                    </ul>
                </div>
            )

        }
    }
}

export default HTTPGetFetch