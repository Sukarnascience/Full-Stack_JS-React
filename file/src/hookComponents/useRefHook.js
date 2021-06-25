import React,{useEffect,useRef,useState} from 'react'

export function UseCaseOuseRef(){
    const [userIN,setUserIN] = useState("")
    const inputRef = useRef(null)
    useEffect(()=>{
        //focus the input
        inputRef.current.focus()
    },[])
    return(
        <div>
            <input ref={inputRef} type="text" value={userIN} onChange={(e)=>{setUserIN(e.target.value)}}/>
            <p>You have Typed: {userIN}</p>
        </div>
    )
}

export function UseCaseTuseRef(){
    const [timer,setTimer] = useState(0)
    const intervalRef = useRef()
    // it will help to make it global value
    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTime=>prevTime+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
    return(
        <div>
            <p>{timer}</p>
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}