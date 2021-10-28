import React from 'react'
import './DevFinderApp.css'; 
import Header from './Header'; 
import SearchBox from './SearchBox'; 
import ProfileBox from './ProfileBox'; 



function DevFinderApp(props) {
    return (
        <div className="DevFinderApp DevFinderAppLight">
            <Header/>
            <SearchBox/>
            <ProfileBox/>
        </div>
    )
}

export default DevFinderApp
