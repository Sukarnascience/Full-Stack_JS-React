import React from 'react'

function MyList(){
    const name = ['Sukarna','Spoorthi']
    const myname = name.map(x => <p key={x}>Name: {x}</p>)
    const myData = [
        {
            id:1,
            name:"Sukarna"
        },
        {
            id:2,
            name:"Spoorthi"
        }
    ]
    const data = myData.map(x => <p key={x.id}>{x.name}</p>)
    return(
        /*
        <div>
            <p>{name[0]}</p>
            <p>{name[1]}</p>
        </div>
        */
       <div>{data} {myname}</div>
    )
}

export default MyList;