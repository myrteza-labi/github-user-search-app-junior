import React from 'react'
import './SearchBox.css'; 
import SearchLogo from './SearchLogo'; 
import Input from './Input'; 
import SearchButton from './SearchButton';
import ErrorText from './ErrorText'; 


function SearchBox(props) {
    return (
        <div className={"Searchbox "+ props.theme}>
            <SearchLogo/>
            <Input theme={props.theme} onChange={props.onInputChange}/>
            <ErrorText errorClassName={props.errorClassName}/>
            <SearchButton onClick={props.onSearchBtnClick}/>
        </div>
    )
}

export default SearchBox
