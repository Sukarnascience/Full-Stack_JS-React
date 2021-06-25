import React from "react"
import {UserConsumer} from './ContextProviderComp'

function ContextConsume(){
    return(
        <UserConsumer>
            {user=>{
                return <p>the context passed value is {user}</p>
            }}
        </UserConsumer>
    )
}

export default ContextConsume