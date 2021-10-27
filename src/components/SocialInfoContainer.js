import React from 'react'
import './SocialInfoContainer.css'; 
import SocialLink from './SocialLink'; 
import Icon from './Icon'; 


function SocialInfoContainer(props) {
    return (
        <div className="SocialInfoContainer">
            <Icon  iconAtl={props.iconAtl} iconSrc={props.iconSrc}/>
            <SocialLink sociaLink={props.sociaLink}/>
        </div>
    )
}

export default SocialInfoContainer
