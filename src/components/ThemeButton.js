import React from 'react'
import './ThemeButton.css'; 


function ThemeButton(props) {
    return (
        <button className="ThemeButton ThemeButtonLight">
            {props.innerText}
        </button>
    )
}

export default ThemeButton
