import React from 'react'
import ReactDOM from 'react-dom'

import HooksStyle from './MyHooksPageStyle.module.css'

import {CounterOne,CounterTwo,CounterObject,CounterArray} from './useStatepartone'
import {CounterOneEffect, CounterTwoEffect,MouseThrEffect,MouseFouEffect} from './useEffectHooksJS'

function MotherHookToApp(){
    return ReactDOM.createPortal(
        <MyHooks/>,document.getElementById("MyHooks")
    )
}

function MyHooks(){
    return(
        <div class={HooksStyle.HooksStylePG}>
            <h1>All your Hooks Component Now</h1>
            <p>useState Hook</p>
            <CounterOne/>
            <CounterTwo/>
            <CounterObject/>
            <CounterArray/>
            <p>useEffect Hook</p>
            <CounterOneEffect/>
            <CounterTwoEffect/>
            <MouseThrEffect/>
            <MouseFouEffect/>
        </div>
    )
}

export default MotherHookToApp