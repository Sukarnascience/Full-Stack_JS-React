import React,{useReducer} from 'react'

const initialState = 0
const reducer=(state,action) =>{
    switch(action){
        case 'increment':
            return state + 1 
        case 'dicrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export function SimpleUseReducer(){
    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <div>
            <p>useReducer hooks simple</p>
            <p>{count}</p>
            <button onClick={()=>{dispatch('increment')}}>increment</button>
            <button onClick={()=>{dispatch('dicrement')}}>dicrement</button>
            <button onClick={()=>{dispatch('reset')}}>reset</button>
        </div>
    )
}


const initialState2 = {
    firstCounter:0
}
const reducer2=(state,action) =>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + 1}
        case 'dicrement':
            return {firstCounter:state.firstCounter - 1}
        case 'reset':
            return {firstCounter:initialState}
        default:
            return {state}
    }
}
export function ComplexUseReducer(){
    const [count,dispatch] = useReducer(reducer2,initialState2)
    return(
        <div>
            <p>useReducer hooks complex</p>
            <p>{count.firstCounter}</p>
            <button onClick={()=>{dispatch({type:'increment'})}}>increment</button>
            <button onClick={()=>{dispatch({type:'dicrement'})}}>dicrement</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
        </div>
    )
}


const initialState3 = {
    firstCounter:0
}
const reducer3=(state,action) =>{
    switch(action.type){
        case 'increment':
            return {firstCounter:state.firstCounter + action.value}
        case 'dicrement':
            return {firstCounter:state.firstCounter - action.value}
        case 'reset':
            return {firstCounter:initialState}
        default:
            return {state}
    }
}
export function ComplexUseReducerTwo(){
    const [count,dispatch] = useReducer(reducer3,initialState3)
    return(
        <div>
            <p>useReducer hooks complex</p>
            <p>{count.firstCounter}</p>
            <button onClick={()=>{dispatch({type:'increment',value:5})}}>increment 5</button>
            <button onClick={()=>{dispatch({type:'dicrement',value:10})}}>dicrement 10</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>reset</button>
        </div>
    )
}