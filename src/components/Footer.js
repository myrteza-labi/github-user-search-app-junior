import React from 'react'
import './Footer.css'; 
import SocialInfoContainer from './SocialInfoContainer'; 
import locationIcon from '../images/icon-location.svg'
import twitterIcon from '../images/icon-twitter.svg'; 
import websiteIcon from '../images/icon-website.svg'; 
import compagnyIcon from '../images/icon-company.svg'; 




function Footer(props) {
    return (
        <footer className="Footer">
            <SocialInfoContainer sociaLink={"San Francisco"} iconSrc={locationIcon} iconAtl={"icon position ou location"}/>
            <SocialInfoContainer sociaLink={"Not available"} iconSrc={twitterIcon} iconAtl={"icon twitter"}/>
            <SocialInfoContainer sociaLink={"https://monsiteweb"} iconSrc={websiteIcon} iconAtl={"icon lien site web"}/>
            <SocialInfoContainer sociaLink={"@Github"} iconSrc={compagnyIcon} iconAtl={"icon de compagnie"}/>
        </footer>
    )
}

export default Footer
