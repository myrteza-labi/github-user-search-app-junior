import React from 'react'
import './Header.css'; 
import AppName from './AppName'; 
import ThemeLogo from './ThemeLogo'; 
import ThemeButton from './ThemeButton'; 
import moonLogo from '../images/icon-moon.svg'; 
import sunLogo from '../images/icon-sun.svg'; 






function Header(props) {

    function test(){
        alert('click')
    }
    return (
        <header className="Header">

            <AppName theme={props.theme}/>

            <div className="themeSettings">
                <ThemeButton theme={props.theme} innerText={"DARK"} 
                             onClick={props.onThemeBtnClick}/>

                <ThemeLogo  src={props.theme==="light "? moonLogo : sunLogo} 
                            alt={"icon " + props.theme==="light "? "moon" : "sun"}/>
            </div>

        </header>
    )
}

export default Header
