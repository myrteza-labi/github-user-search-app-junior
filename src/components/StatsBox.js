import React from 'react'
import './StatsBox.css'; 
import Stat from './Stat'; 


function StatsBox(props) {
    return (
        <section className="StatsBox StatsBoxLight">
            <Stat statName="Repos" statNumber="8"/>
            <Stat statName="Followers" statNumber="3232"/>
            <Stat statName="following" statNumber="9"/>
        </section>
    )
}

export default StatsBox
