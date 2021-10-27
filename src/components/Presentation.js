import React from 'react'
import './Presentation.css'; 


function Presentation(props) {
    return (
        <p className="Presentation">
            {props.children}
        </p>
    )
}

export default Presentation
