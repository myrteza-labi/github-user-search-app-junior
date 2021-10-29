import React from 'react'
import './SocialInfoContainer.css'; 
import SocialLink from './SocialLink'; 
import Icon from './Icon'; 


function SocialInfoContainer(props) {
    return (
        <div className="SocialInfoContainer">
            <Icon  theme={props.theme} iconAtl={props.iconAtl} iconSrc={props.iconSrc}/>
            <SocialLink theme={props.theme} sociaLink={props.sociaLink}/>
        </div>
    )
}

export default SocialInfoContainer
