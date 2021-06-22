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
        console.log("CounterTwoEffect is called")
    },[count])

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Increment title</button>
        </div>
    )
}

export function MouseThrEffect(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("MouseThrEffect is called")
        window.addEventListener('mousemove',logMousePosition)
    },[])

    return(
        <div>
            <p>Mouse positon in this screen - X:{x},Y:{y}</p>
        </div>
    )
}

function EffectMouse(){
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logMousePosition = e =>{
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("MouseFouEffect is called")
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            console.log("MouseFouEffect has unmount")
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

    return(
        <div>
            <p>Mouse positon in this screen - X:{x},Y:{y}</p>
        </div>
    )
}

export function MouseFouEffect(){
    const [display,setDisplay] = useState(true)
    return(
        <div>
            <button onClick={()=>setDisplay(!display)}>Unmount</button>
            {display ? <EffectMouse/> : <p>Mouse Event has Unmount</p>}
        </div>
    )
}