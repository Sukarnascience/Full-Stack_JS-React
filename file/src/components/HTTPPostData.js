import React,{Component} from 'react'
import axios from 'axios'

class HTTPPostData extends Component{
    constructor(props){
        super(props)
        this.state={
            userId: 1234,
            title: "",
            body: ""
        }
    }

    UpdateUserID = (event) =>{
        this.setState({userId:event.target.value})
    }
    UpdateTitle = (event) =>{
        this.setState({title:event.target.value})
    }
    UpdateBody = (event) =>{
        this.setState({body:event.target.value})
    }
    SendData = (event) =>{
        event.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then(responce=>{
            console.log(responce)
            alert(`Post has dun successfully \n Your post was: \nUserID:${this.state.userId}\nTitle:${this.state.title}\nBody:${this.state.body}`)
        })
        .catch(error=>{
            console.log(error)
            alert("Ooops!, something went wrong ... Post Failed!")
        })
    }
    render(){
        return(
            <form onSubmit={this.SendData}>
                <label>UserID:</label>
                <input type="number" value={this.state.userId} onChange={this.UpdateUserID}/><br/>
                <label>Title :</label>
                <input type="text" value={this.state.title} onChange={this.UpdateTitle}/><br/>
                <label>Body  :</label>
                <textarea value={this.state.body} onChange={this.UpdateBody}/><br/>
                <button type="submit">Post</button>
            </form>
        )
    }
}

export default HTTPPostData