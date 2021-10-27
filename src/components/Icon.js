import React from 'react'
import './Icon.css'; 


function Icon(props) {
    return (
        <div className="Icon">
            <img src={props.iconSrc} alt={props.iconAlt} className="iconImage" />
        </div>

    )
}

export default Icon
