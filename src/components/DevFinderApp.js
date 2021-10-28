import React from 'react'
import './DevFinderApp.css'; 
import Header from './Header'; 
import SearchBox from './SearchBox'; 
import ProfileBox from './ProfileBox'; 



class DevFinderApp extends React.Component{
    constructor(props){
        super(props); 
        this.state={
            data : "pas de données", 
            userName: null, 
        }
        this.handleClick = this.handleClick.bind(this); 
        this.handleInputChange = this.handleInputChange.bind(this); 

        

    }

     handleClick(){
        fetch("https://api.github.com/users/myrteza-labi")
        .then(response => response.json())
            .then(data => 
            {
                console.log(this.state.data); 
                console.log(data)
                this.setState({
                    data : data, 
                })
                console.log(this.state.data); 

            })
     }



     handleInputChange(e){
        let value = e.target.value; 
        this.setState({
            userName : value, 
        })
     }
    

    render(){

            
            

        

        
        
        


        return (
            <div onClick={this.handleClick} className="DevFinderApp DevFinderAppLight">
                <Header/>
                <SearchBox onInputChange={this.handleInputChange}/>
                <ProfileBox/>
            </div>
        )
    }
    
}

export default DevFinderApp
