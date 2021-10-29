import React from 'react'
import './ErrorText.css'; 

function ErrorText(props) {
    return (
        <p className={"ErrorText " + props.errorClassName}>
            No result
        </p>
    )
}

export default ErrorText
