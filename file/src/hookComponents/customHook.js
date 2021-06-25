import {useEffect} from 'react'

import React,{useState} from 'react'

function useDocument(count){
    useEffect(()=>{
        document.title = `Hook Clicked ${count}`
    },[count])
}

export default function UpdateTitle(){
    const [count,setCount] = useState(0)
    useDocument(count)
    return(
        <div>
            <p>custom hook</p>
            <button onClick={()=>setCount(count+1)}>Increment Title using hook</button>
        </div>
    )
}