import React from 'react'
import './SocialLink.css'; 


function socialLink(props) {
    return (
        <a href="" className={"SocialLink SocialLinkLight " + props.theme}>{props.sociaLink}</a>
    )
}

export default socialLink
