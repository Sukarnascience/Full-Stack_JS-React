import React,{useState} from 'react'

export function CounterOne(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Your Count is {count}</button>
        </div>
    )
}

export function CounterTwo(){
    const initialValue = 0;
    const [count,setCount] = useState(initialValue);
    const incrementFive = () => {
        for(let i = 0; i < 6; i++){
            setCount(prevState=>prevState + 1)
        }
    }
    /* Another way to increment 5 is 
    const incrementFive = () => {setCount(prevState=>prevState.count + 5)}
    */
   return(
       <div>
           <p>Present Value: {count}</p>
           <button onClick={()=>setCount(initialValue)}>Reset</button>
           <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
           <button onClick={()=>setCount(prevState=>prevState-1)}>Dicrement</button>
           <button onClick={incrementFive}>Increment 5</button>
       </div>
   )
}

export function CounterObject(){
    const [UserData,setUserdata] = useState(
        {
            firstName:"",
            lastName:"",
            age:18
        }
    )
    return(
        <div>
            <input 
            type="text" 
            value={UserData.firstName}
            onChange={e=>setUserdata({...UserData,firstName:e.target.value})}/>
            <input 
            type="text" 
            value={UserData.lastName}
            onChange={e=>setUserdata({...UserData,lastName:e.target.value})}/>
            <input 
            type="number" 
            value={UserData.age}
            onChange={e=>setUserdata({...UserData,age:e.target.value})}/>
            <p>Your inserted data is :</p>
            <ul>
                <li>Your First Name : {UserData.firstName}</li>
                <li>Your Last Name : {UserData.lastName}</li>
                <li>Your Age : {UserData.age}</li>
            </ul>
        </div>
    )
}

export function CounterArray(){
    const [item,setItem] = useState([])
    const [inputData,setInputData] = useState("")
    const addItem = (e) => {
        e.preventDefault()
        setItem([...item,{data:inputData,id:item.length}])
    }
    return(
        <div>
            <form onSubmit={addItem}>
                <textarea value={inputData} onChange={e=>{setInputData(e.target.value)}}/>
                <button type="submit">Add ToDo</button>
            </form>
            <p>Your ToDo</p>
            <ul>
                {item.map(value=>(<li id={value.id}>{value.data}</li>))}
            </ul>
        </div>
    )
}