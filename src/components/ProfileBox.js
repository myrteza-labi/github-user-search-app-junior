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

    return (
        <section className="ProfileBox ProfileBoxLight">
             <ProfilePicture    src={"https://i.pinimg.com/474x/11/d3/f2/11d3f2cb55ffbc652249f38d89fa2857--read-naruto-manga-anime-manga.jpg"}
                                alt={"icon de Naruto"}/>

            <div className="profileBoxMainCtn">

                <ProfilePresentation    name={props.name}
                                        login={props.login}
                                        date={props.date}
                                        bio={props.bio}/>

                <StatsBox   repo={repo} 
                            followers={props.followers} 
                            following={props.following}/>

                <Footer />
            </div>
        </section>
    )
}

export default ProfileBox


