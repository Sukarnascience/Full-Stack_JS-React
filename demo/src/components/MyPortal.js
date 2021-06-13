import React from 'react';
import ReactDOM from 'react-dom';
import myStyleModule from './myStyle.module.css';

function MyPortal(){
    return ReactDOM.createPortal(
        <h3 className={myStyleModule.MyCustomPortalCSS}>Woow i am outside the Root tree</h3>,
        document.getElementById('MyCustomPortal')
    )
}

export default MyPortal;