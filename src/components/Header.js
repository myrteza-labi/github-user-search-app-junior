import React from 'react'
import './Header.css'; 
import AppName from './AppName'; 
import ThemeLogo from './ThemeLogo'; 
import ThemeButton from './ThemeButton'; 
import moonLogo from '../images/icon-moon.svg'; 
import sunLogo from '../images/icon-sun.svg'; 






function Header(props) {
    return (
        <header className="Header">
            <AppName/>
            <ThemeButton innerText={"LIGHT"}/>
            <ThemeLogo src={sunLogo} alt="icon soleil"/>
        </header>
    )
}

export default Header
