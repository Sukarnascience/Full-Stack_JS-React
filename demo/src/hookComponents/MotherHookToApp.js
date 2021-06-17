import React from 'react'
import ReactDOM from 'react-dom'

import HooksStyle from './MyHooksPageStyle.module.css'

function MotherHookToApp(){
    return ReactDOM.createPortal(
        <MyHooks/>,document.getElementById("MyHooks")
    )
}

function MyHooks(){
    return(
        <div class={HooksStyle.HooksStylePG}>
            <h1>All your Hooks Component Now</h1>
            <p>UseState Hook</p>
        </div>
    )
}

export default MotherHookToApp