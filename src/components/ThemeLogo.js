import React from 'react'
import './ThemeLogo.css'; 


function ThemeLogo(props) {
    return (
        <img src={props.src} alt={props.alt} className="ThemeLogo" />
    )
}

export default ThemeLogo
