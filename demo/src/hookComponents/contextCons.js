import React,{useContext} from 'react'
import { userData } from './contextProv'

export default function MyCompTree(){
    const Data = useContext(userData)
    return(
        <p>The value which has passed in component tree is :{Data}</p>
    )
}