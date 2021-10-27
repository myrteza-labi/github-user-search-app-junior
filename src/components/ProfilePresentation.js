import React from 'react'
import './ProfilePresentation.css'; 
import ProfilePicture from './ProfilePicture'; 
import Pseudo from './Pseudo'; 
import UserName from './UserName'; 
import UserBeginingDate from './UserBeginingDate'; 
import Presentation from './Presentation'; 



function ProfilePresentation(props) {
    return (
        <div className="ProfilePresentation">
            <ProfilePicture src={"https://i.pinimg.com/474x/11/d3/f2/11d3f2cb55ffbc652249f38d89fa2857--read-naruto-manga-anime-manga.jpg"}
                            alt={"icon de Naruto"}/>
            <Pseudo pseudo={"naruto"}/>
            <UserName userName={"Naruto-Uzumaki"}/>
            <UserBeginingDate userDate={"10/10/2015"}/>
            
            <Presentation>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/>
                Donec odio. Quisque volutpat mattis eros.
            </Presentation>
        </div>
    )
}

export default ProfilePresentation
