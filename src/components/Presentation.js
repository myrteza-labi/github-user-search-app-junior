import React from 'react'
import './Presentation.css'; 


function Presentation(props) {
    return (
        <p className="Presentation">
            {props.bio}
        </p>
    )
}

export default Presentation
