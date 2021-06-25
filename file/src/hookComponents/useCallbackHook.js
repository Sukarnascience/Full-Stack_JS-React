import React,{useState,useCallback} from 'react'

export default function CallBackHook(){
    const [skill,setskill] = useState(4)
    const [salary,setSalary] = useState(20000)
    const incrementSkill = useCallback(()=>{
        console.log("called skill")
        setskill(skill+1)
    },[skill])
    const incrementSalary = useCallback(()=>{
        console.log("called salary")
        setSalary(salary+1500)
    },[salary])
    return(
        <div>
            <button onClick={incrementSkill}>Skill Years +</button>
            <button onClick={incrementSalary}>Salary +</button>
            <p>If your skill year is :{skill} then you may get : rs{salary} salary</p>
        </div>
    )
}