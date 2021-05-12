import React from 'react'

function Childern(props){
    return(
        <div>
            {/*<button onClick={props.popupalert}>Alert plz</button>*/}
            <button onClick={()=>props.popupalert('sukarna')}>Alert plz</button>
        </div>
    )
}

export default Childern;
