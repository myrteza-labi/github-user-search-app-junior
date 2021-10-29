import React from 'react'
import './Input.css'; 


function Input(props) {
    return (
        <input onChange={props.onChange} type="text" className={"Input InputLight " + props.theme} placeholder="Search username" />
    )
}

export default Input
