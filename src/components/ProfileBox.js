import React from 'react'
import './ProfileBox.css'; 
import ProfilePresentation from './ProfilePresentation'; 
import StatsBox from './StatsBox'; 
import Footer from './Footer'; 


function ProfileBox(props) {
    return (
        <section className="ProfileBox">
            <ProfilePresentation/>
            <StatsBox/>
            <Footer/>
        </section>
    )
}

export default ProfileBox
