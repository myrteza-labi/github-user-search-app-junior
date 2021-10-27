import React from 'react'
import './SocialInfoContainer.css'; 
import SocialLink from './SocialLink'; 
import Icon from './Icon'; 


function SocialInfoContainer(props) {
    return (
        <div className="SocialInfoContainer">
            <SocialLink sociaLink={props.sociaLink}/>
            <Icon  iconAtl={props.iconAtl} iconSrc={props.iconSrc}/>
        </div>
    )
}

export default SocialInfoContainer
