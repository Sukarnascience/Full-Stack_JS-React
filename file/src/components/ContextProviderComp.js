import React from 'react'
import ContextConsume from './ContextConsumerComp'

const UserContext = React.createContext()
const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer

function ContextPass(){
    return(
        <UserProvider value = "Jana">
            <ContextConsume/>
        </UserProvider>
    )
}

export default ContextPass