import React,{useState,useEffect} from 'react'

export function CounterOneEffect(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `Clicked ${count}`
    })
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Increment title</button>
        </div>
    )
}

export function CounterTwoEffect(){
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(()=>{
        document.title =  `Clicked ${count}`
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Increment title</button>
        </div>
    )
}