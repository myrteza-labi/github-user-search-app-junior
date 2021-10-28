import React from 'react'
import './StatsBox.css'; 
import Stat from './Stat'; 


function StatsBox(props) {

    const test = "4"; 
    const repo = props.repo; 
    const followers = props.followers; 
    const following = props.following; 

    return (
        <section className="StatsBox StatsBoxLight">
            <Stat statName="Repos" statNumber={repo}/>
            <Stat statName="Followers" statNumber={followers}/>
            <Stat statName="following" statNumber={following}/>
        </section>
    )
}

export default StatsBox
