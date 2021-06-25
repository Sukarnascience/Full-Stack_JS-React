import React from 'react'
import './CustomToast.css'

import {BsFillBellFill} from 'react-icons/bs'
import {ImCross} from 'react-icons/im'

export default function Notify({title,message}){
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
                    <button className="closeButton"><ImCross/></button>
                </div>
            </div>
            <div className="downPart">
                <p>{message}</p>
            </div>
        </div>
    )
}