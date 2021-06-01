import React from 'react';

function MyMemoComp({data}){
    console.log("Memo Component is re-rendered")
    return(
        <p>This Pure Component has been re-render {data} (See in console)</p>
    )
}

export default React.memo(MyMemoComp);