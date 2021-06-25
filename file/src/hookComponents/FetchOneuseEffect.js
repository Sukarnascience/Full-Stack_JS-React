import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FetchOneuseEffect(){
    const [datas,setDatas] = useState([])
    const [errorState,setErrorState] = useState(false)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{
            setDatas(response.data)
        })
        .catch(error=>{
            console.log(`Effer in fetching data Error is : ${error}`)
            setErrorState(true)
        })
    },[])

    return(
        <div>
            <h3>Our Fetch List</h3>
            {errorState ? <p>Oops someting went wrong</p>:
            <ul>{datas.map(post=>(<li key={post.id}>{post.title}</li>))}</ul>}
        </div>
    )
}