import React from 'react'
import './Icon.css'; 


function Icon(props) {
    return (
        <img src={props.iconSrc} alt={props.iconAlt} className="Icon" />
    )
}

export default Icon
