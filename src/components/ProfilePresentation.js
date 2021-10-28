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
                <div className="profilPresentationMainCtn">
                    <div className="pseudoNameDateCtn">
                        <div className="pseudoNameCtn">
                            <Pseudo name={props.name}/>
                            <UserName login={props.login}/>
                        </div>
                        <UserBeginingDate date={props.date}/>
                    </div>
                    
            
                    <Presentation bio={props.bio} />
                </div>
            
        </div>
    )
}

export default ProfilePresentation
