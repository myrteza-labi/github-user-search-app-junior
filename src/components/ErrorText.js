import React from 'react'
import './ErrorText.css'; 

function ErrorText(props) {
    return (
        <p className={props.className}>
            No result
        </p>
    )
}

export default ErrorText
