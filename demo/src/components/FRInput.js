import React from 'react'

const FRInput = React.forwardRef((props,refrence)=>{
    return(<input type="text" ref={refrence}/>)
})

export default FRInput;