import React from 'react'
import MyCompTree from './contextCons'

export const userData = React.createContext()

export default function DataSend(){
    return(
        <div>
            <p><u>Passing the value</u></p>
            <userData.Provider value={'Sukarna Jana'}>
                <MyCompTree/>
            </userData.Provider>
        </div>
    )
}