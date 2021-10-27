import React from 'react'
import './ProfilePicture.css'; 


function ProfilePicture(props) {
    return (
        <img src={props.src} alt={props.alt} className="ProfilePicture" />
    )
}

export default ProfilePicture
