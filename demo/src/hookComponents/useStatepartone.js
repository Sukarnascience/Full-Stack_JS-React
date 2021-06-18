import React,{useState} from 'react'

function CounterOne(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Your Count is {count}</button>
        </div>
    )
}

export default CounterOne;