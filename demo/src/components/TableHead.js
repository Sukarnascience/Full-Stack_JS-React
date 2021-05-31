import React from 'react';
import TableData from './TableData';

function MyTable(){
    return(
        <div>
            <h2>Table:-</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Relation</th>
                        <th>DOB</th>
                    </tr>
                    <TableData/>
                </tbody>
            </table>
        </div>
    )
}

export default MyTable;