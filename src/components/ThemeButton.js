import React from 'react'
import './ThemeButton.css'; 


function ThemeButton(props) {
    return (
        <button className={"ThemeButton " + props.theme } onClick={props.onClick}>
            {props.theme == "light " ? "DARK": "LIGHT"}
        </button>
    )
}

export default ThemeButton
