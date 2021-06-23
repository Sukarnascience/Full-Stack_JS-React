import React,{useState,useMemo} from 'react'

export default function MemoHook(){
    const [count1,setCount1] = useState(0)
    const [count2,setCount2] = useState(0)
    const Increment1 = () =>{
        setCount1(count1+1)
    }
    const Increment2 = () =>{
        setCount2(count2+1)
    }
    const isEven = useMemo(()=>{
        let i = 0
        while(i<2000000000) i++
        return count1%2 == 0
    },[count1]) // by this we will see the delay in UI 
    return(
        <div>
            <p>our Memo hook</p>
            <div>
                <button onClick={Increment1}>button 1</button>
                <p>{isEven ? 'Even' : 'Odd'}</p>
            </div>
            <div>
                <button onClick={Increment2}>button 2</button>
            </div>   
        </div>
    ) 
}