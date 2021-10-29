import React from 'react'
import './ProfileBox.css'; 
import ProfilePresentation from './ProfilePresentation'; 
import StatsBox from './StatsBox'; 
import Footer from './Footer'; 
import ProfilePicture from './ProfilePicture'; 


function ProfileBox(props) {


    const repo = props.repo; 
    const follorwers = props.follorwers; 
    const following = props.following; 

    const location = props.location; 
    const website = props.website; 
    const twitter = props.twitter; 
    const company = props.company; 

    return (
        <section className="ProfileBox ProfileBoxLight">
             <ProfilePicture    src={props.avatarSrc}
                                alt={props.AvatartAlt}/>

            <div className="profileBoxMainCtn">

                <ProfilePresentation    name={props.name}
                                        login={props.login}
                                        date={props.date}
                                        bio={props.bio}/>

                <StatsBox   repo={repo} 
                            followers={props.followers} 
                            following={props.following}/>

                <Footer location={props.location}
                        website={props.website}
                        twitter={props.twitter}
                        company={props.company}/>
            </div>
        </section>
    )
}

export default ProfileBox


