import React from 'react'
import './StatNumber.css'; 


function StatNumber(props) {
    return (
        <p className={"StatNumber " + props.theme }>{props.statNumber}</p>
    )
}

export default StatNumber
