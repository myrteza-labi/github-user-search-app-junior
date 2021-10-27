import React from 'react'
import './SearchBox.css'; 
import SearchLogo from './SearchLogo'; 
import Input from './Input'; 
import SearchButton from './SearchButton';


function SearchBox(props) {
    return (
        <div className="Searchbox">
            <SearchLogo/>
            <Input/>
            <SearchButton/>
        </div>
    )
}

export default SearchBox
