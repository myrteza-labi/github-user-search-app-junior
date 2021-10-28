import React from 'react'
import './UserName.css'; 


function UserName(props) {
    return (
        <p className="UserName">{props.login}</p>
    )
}

export default UserName
