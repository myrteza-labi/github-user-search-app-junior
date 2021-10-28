import React from 'react'
import './StatNumber.css'; 


function StatNumber(props) {
    return (
        <p className="StatNumber StatNumberDark">{props.statNumber}</p>
    )
}

export default StatNumber
