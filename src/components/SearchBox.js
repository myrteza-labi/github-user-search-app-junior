import React from 'react'
import './SearchBox.css'; 
import SearchLogo from './SearchLogo'; 
import Input from './Input'; 
import SearchButton from './SearchButton';
import ErrorText from './ErrorText'; 


function SearchBox(props) {
    return (
        <div className="Searchbox SearchboxLight">
            <SearchLogo/>
            <Input onChange={props.onInputChange}/>
            <ErrorText/>
            <SearchButton/>
        </div>
    )
}

export default SearchBox
