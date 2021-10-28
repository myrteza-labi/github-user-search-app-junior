import React from 'react'
import './ProfileBox.css'; 
import ProfilePresentation from './ProfilePresentation'; 
import StatsBox from './StatsBox'; 
import Footer from './Footer'; 
import ProfilePicture from './ProfilePicture'; 


function ProfileBox(props) {
    return (
        <section className="ProfileBox">
             <ProfilePicture    src={"https://i.pinimg.com/474x/11/d3/f2/11d3f2cb55ffbc652249f38d89fa2857--read-naruto-manga-anime-manga.jpg"}
                                alt={"icon de Naruto"}/>

            <div className="profileBoxMainCtn">
                <ProfilePresentation/>
                <StatsBox/>
                <Footer/>
            </div>
        </section>
    )
}

export default ProfileBox
