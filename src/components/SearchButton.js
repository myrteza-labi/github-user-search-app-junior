import React from 'react'
import './SearchButton.css'; 


function SearchButton(props) {
    return (
        <button className="SearchButton" onClick={props.onClick}>Search</button>
    )
}

export default SearchButton
