import React from 'react'
import './StatsBox.css'; 
import Stat from './Stat'; 


function StatsBox(props) {

    const test = "4"; 
    const repo = props.repo; 
    const followers = props.followers; 
    const following = props.following; 

    return (
        <section className={"StatsBox " + props.theme }>
            <Stat theme={props.theme} statName="Repos" statNumber={repo}/>
            <Stat theme={props.theme} statName="Followers" statNumber={followers}/>
            <Stat theme={props.theme} statName="following" statNumber={following}/>
        </section>
    )
}

export default StatsBox
