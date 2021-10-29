import React from 'react'
import './DevFinderApp.css'; 
import Header from './Header'; 
import SearchBox from './SearchBox'; 
import ProfileBox from './ProfileBox'; 
import errAvatar from '../images/errorAvatar.jpeg'; 

/*  dont put your hands here x)   */

class DevFinderApp extends React.Component{
    constructor(props){
        super(props); 
        this.state={

            errorText : "ErrorText ", 
            searchStatus: " ",
            profileBoxClssNme: "ProfileBox ", 
            theme: "light ", 

            data : "pas de données", 
            status : null, 
            inputvalue: null, 

            login: null, 
            avatar : null, 
            name: null, 
            date : "", 
            bio: null, 
            repo : null, 
            followers: null, 
            following : null, 
            location: null, 
            company : null, 
            twitter: null, 
            github : null, 


        }
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.getName = this.getName.bind(this); 
        this.getLogin = this.getLogin.bind(this); 
        this.getAvatart = this.getAvatart.bind(this); 
        this.getBio = this.getBio.bind(this); 
        this.getRepo = this.getRepo.bind(this); 
        this.getFollowers = this.getFollowers.bind(this); 
        this.getFollowing = this.getFollowing.bind(this); 
        this.getLocation = this.getLocation.bind(this); 
        this.getCompagny = this.getCompagny.bind(this); 
        this.getTwitter = this.getTwitter.bind(this); 
        this.getGithub = this.getGithub.bind(this); 
        this.FetchData = this.FetchData.bind(this); 
        this.setAllProfile = this.setAllProfile.bind(this); 
        this.handleLoad = this.handleLoad.bind(this); 
        this.fectDataAdmin = this.fectDataAdmin.bind(this); 
        this.handleSearchBtnClick = this.handleSearchBtnClick.bind(this); 
        this.setErrorState = this.setErrorState.bind(this); 
        this.setCorrectState = this.setCorrectState.bind(this); 

        this.handleThemeBtnClick = this.handleThemeBtnClick.bind(this); 
    }

 
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
    
     componentWillUnmount() { 
       window.removeEventListener('load', this.handleLoad)  
     }

     handleLoad(){
        
        this.fectDataAdmin(); 

        this.getName(); 
        this.getLogin(); 
        this.getDate(); 

        this.getAvatart(); 
        this.getBio(); 
        this.getRepo(); 
        this.getFollowers(); 
        this.getFollowing(); 
        this.getLocation(); 
        this.getCompagny(); 
        this.getTwitter(); 
        this.getGithub(); 
        this.getLogin(); 
        this.getDate(); 
     }

     fectDataAdmin(){
        fetch("https://api.github.com/users/myrteza-labi")
        .then(response => response.json())

        
            .then(data => 
            {
                this.setState({
                    data : data, 
                }, ()=> this.setAllProfile())
            })
     }

    
     handleSearchBtnClick(){
        this.FetchData(); 
     }

     handleThemeBtnClick(){

        let theme = this.state.theme; 
        if(theme==="light "){
            this.setState({
                theme : "dark ", 
            })
        }
        else {
            this.setState({
                theme : "light ", 
            })
        }
        
     }


     setAllProfile(){
        this.getName(); 
        this.getLogin(); 
        this.getDate(); 
        this.getAvatart(); 
        this.getBio(); 
        this.getRepo(); 
        this.getFollowers(); 
        this.getFollowing(); 
        this.getLocation(); 
        this.getCompagny(); 
        this.getTwitter(); 
        this.getGithub(); 
        this.getLogin(); 
        this.getDate(); 
     }

    /* 

    FetchData(){
        let user = this.state.inputvalue; 

        fetch("https://api.github.com/users/" + user)
        .then(response => response.json())

        .then(data => 
        {            
            this.setState({
                data : data, 
            }, ()=> this.setAllProfile())
        })
    }

    */

    setCorrectState(){
        this.setState({
            errorText: "ErrorText",
            searchStatus : " ",
        })
    }

    setErrorState(){
        this.setState({
            avatar : errAvatar,
            name: "User not found", 
            login: "error 404", 
            date: null, 
            repo: null, 
            followers: null, 
            following: null, 
            location: null, 
            twitter: null, 
            github: null, 
            company: null, 
            bio: null, 

            errorText: "ErrorTextActive",
            searchStatus : "error ", 

        })
    }

    FetchData(){
        let user = this.state.inputvalue; 

        fetch("https://api.github.com/users/" + user).then(response => {
            if(response.ok){
                return response.json()
            }
            else {
                throw new Error('Something went wrong')
            }
        })
        .then(data => 
        {            
            this.setState({
                data : data, 
            }, ()=> this.setAllProfile(), this.setCorrectState())
        })
        .catch((error) => {
            this.setErrorState(); 
          });
    }
    


     handleInputChange(e){
        let value = e.target.value; 
        this.setState({
            inputvalue : value, 
        })
     }

    
    getLogin(){
        let login = this.state.data.login; 
        this.setState({
            login : login, 
        })
    }

    getAvatart(){
        let avatar = this.state.data.avatar_url; 
        this.setState({
            avatar : avatar, 
        })
    }

    getName(){
        let name = this.state.data.name; 
        this.setState({
            name : name ? name : "no Name",  
        })
    }

    getFormatDate(value){
        this.setState({
            date: value.substring(0,10)
        })
    }

    getDate(){
        let date = this.state.data.created_at; 
        /* if there is a date show only the date and not the hours*/
        let newdate = date ? date.substring(0,10) : date; 
        this.setState({
            date: newdate,
        })
    }

    getBio(){
        let bio = this.state.data.bio;
        this.setState({
            bio : bio, 
        }) 
    }

    getRepo(){
        let repo = this.state.data.public_repos;
        this.setState({
            repo : repo, 
        }) 
    }

    getFollowers(){
        let followers = this.state.data.followers;
        this.setState({
            followers : followers, 
        }) 
    }

    getFollowing(){
        let following = this.state.data.following;
        this.setState({
            following : following, 
        }) 
    }

    getLocation(){
        let location = this.state.data.location;
        this.setState({
            location : location===true? location : "No location", 
        }) 
    }

    getCompagny(){
        let company = this.state.data.company;
        this.setState({
            company : company===true? company : "No company",
        }) 
    }

    getTwitter(){
        let twitter = this.state.data.twitter_username;
        this.setState({
            twitter : twitter===true? twitter : "No twitter", 
        }) 
    }

    getGithub(){
        let github = this.state.data.html_url;
        this.setState({
            github : github ? github : "No github", 
        }) 
    }

    




    render(){
        return (
            <div className={"DevFinderApp " + this.state.theme}>

                <Header theme={this.state.theme}
                        onThemeBtnClick={this.handleThemeBtnClick} />
                
                <SearchBox  onInputChange={this.handleInputChange}
                            onSearchBtnClick={this.handleSearchBtnClick}
                            errorClassName={this.state.searchStatus}
                            theme={this.state.theme}/>

                <ProfileBox className={this.state.profileBoxClssNme}
                            errorClassName={this.state.searchStatus}
                            theme={this.state.theme}
                            name={this.state.name}
                            login={this.state.login}
                            date={this.state.date}
                            bio={this.state.bio}
                            repo={this.state.repo}
                            followers={this.state.followers}
                            following={this.state.following}
                            avatarSrc={this.state.avatar}
                            AvatartAlt={this.state.name}
                            location={this.state.location}
                            website={this.state.github}
                            twitter={this.state.twitter}
                            company={this.state.company}/>
            </div>
        )
    }
    
}

export default DevFinderApp
