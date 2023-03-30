import React from 'react'
import { useParams } from 'react-router-dom'
import './Form.css'

function Form() {
    const { Data } = useParams([])
    console.log(Data)
    return (
        <div className='formBox'>
            <div className="InfoDiv">

            </div>
            <div className="form"></div>

        </div>
    )
}

export default Form
