import React from 'react'
import './SearchLogo.css'; 
import searchIcon from '../images/icon-search.svg'; 


function SearchLogo(props) {
    return (
        <img src={searchIcon} alt={"icon loupe"} className="SearchLogo" />
    )
}

export default SearchLogo
