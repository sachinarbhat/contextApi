import React from 'react'
import { DataConsumer } from '../context/context'

function Second() {
    return (
        <div>
            <DataConsumer>
                {(information)=>{
                    return(
                        <h1>Data from Parent : {information}</h1>
                    )
                }}
            </DataConsumer>
        </div>
    )
}

export default Second
