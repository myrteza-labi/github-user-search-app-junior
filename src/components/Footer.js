import React from 'react'
import './Footer.css'; 
import SocialInfoContainer from './SocialInfoContainer'; 
import locationIcon from '../images/icon-location.svg'
import twitterIcon from '../images/icon-twitter.svg'; 
import websiteIcon from '../images/icon-website.svg'; 
import compagnyIcon from '../images/icon-company.svg'; 




function Footer(props) {

    let location = props.location; 
    let website = props.website; 
    let twitter = props.twitter; 
    let company = props.company; 
    
    return (
        <footer className="Footer">
            <SocialInfoContainer theme={props.theme} sociaLink={location} iconSrc={locationIcon} iconAtl={"icon position ou location"}/>
            <SocialInfoContainer theme={props.theme} sociaLink={website} iconSrc={websiteIcon} iconAtl={"icon twitter"}/>
            <SocialInfoContainer theme={props.theme} sociaLink={twitter} iconSrc={twitterIcon} iconAtl={"icon lien site web"}/>
            <SocialInfoContainer theme={props.theme} sociaLink={company} iconSrc={compagnyIcon} iconAtl={"icon de compagnie"}/>
        </footer>
    )
}

export default Footer
