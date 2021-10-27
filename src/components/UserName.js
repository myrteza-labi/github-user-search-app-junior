import React from 'react'
import './UserName.css'; 


function UserName(props) {
    return (
        <p className="UserName">{props.userName}</p>
    )
}

export default UserName
