import React from 'react'

function MyBFF({BFFName}){
    if(BFFName!=='spoorthi'){
        throw new Error(`No!, ${BFFName} is not authors BFF`)
    }
    return(
    <p>Yea {BFFName} is Authors BFF</p>
    )
}

export default MyBFF;