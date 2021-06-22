import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FetchThruseEffect(){
    const [data,setData] = useState({})
    const [errorState,setErrorState] = useState(false)
    const [id,setId] = useState(1)
    const [fetchid,setFetchId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchid}`)
        .then(response=>{
            setData(response.data)
        })
        .catch(error=>{
            console.log(`Effer in fetching data Error is : ${error}`)
            setErrorState(true)
        })
    },[fetchid])

    const startFetching = () =>{
        setFetchId(id)
    }
    return(
        <div>
            <input type="number" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <button onClick={startFetching}>Fetch</button>
            {errorState ? <p>Oops someting went wrong / no such id is there</p>:<p>{data.title}</p>}
        </div>
    )
}