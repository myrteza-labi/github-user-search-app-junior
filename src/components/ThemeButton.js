import React from 'react'
import './ThemeButton.css'; 


function ThemeButton(props) {
    return (
        <button className="ThemeButton">
            {props.innerText}
        </button>
    )
}

export default ThemeButton
