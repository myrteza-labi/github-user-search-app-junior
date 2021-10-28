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
            <div className="themeSettings">
                <ThemeButton innerText={"DARK"}/>
                <ThemeLogo src={moonLogo} alt="icon soleil"/>
            </div>
        </header>
    )
}

export default Header
