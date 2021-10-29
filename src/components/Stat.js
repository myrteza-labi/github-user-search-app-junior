import React from 'react'
import './Stat.css'; 
import StatName from './StatName'; 
import StatNumber from './StatNumber'; 


function Stat(props) {
    return (
        <div className="Stat">
            <StatName statName={props.statName}/>
            <StatNumber theme={props.theme} statNumber={props.statNumber}/>
        </div>
    )
}

export default Stat
