import React from 'react'
import './ProfilePicture.css'; 


function ProfilePicture(props) {
    return (
        <img src={props.src} alt={"photo de profile de " + props.alt} className="ProfilePicture" />
    )
}

export default ProfilePicture
