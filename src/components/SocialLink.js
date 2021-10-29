import React from 'react'
import './SocialLink.css'; 


function socialLink(props) {
    return (
        <a href="" className={"SocialLink " + props.theme}>{props.sociaLink}</a>
    )
}

export default socialLink
