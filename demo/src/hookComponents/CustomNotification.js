import React from 'react'
import './CustomToast.css'

import {BsFillBellFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'

function useCustomToast(title,message){
    const close = () =>{
        alert('closed')
    }
    return(
        <div className="notification">
            <div className="topPart">
                <div className="iconPoision">
                    <BsFillBellFill/>
                </div>
                <div className="notifiData">
                    <p><b>{title}</b></p>
                </div>
                <div className="crossPosition">
                    <button onClick={close} className="closeButton"><ImCross/></button>
                </div>
            </div>
            <div className="downPart">
                <p>{message}</p>
            </div>
        </div>
    )
}

export default function Notify(){
    return(
        <div>{useCustomToast("Msg","Hello from developer, it was really great to see you all and i would love to see you all again")}</div>
    )
}