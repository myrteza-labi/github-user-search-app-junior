import React from 'react'
import './Pseudo.css'; 


function Pseudo(props) {
    return (
        <h2 className={"Pseudo " + props.theme }>{props.name}</h2>
    )
}

export default Pseudo
