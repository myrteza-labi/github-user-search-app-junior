import React from 'react'
import './DevFinderApp.css'; 
import Header from './Header'; 
import SearchBox from './SearchBox'; 
import ProfileBox from './ProfileBox'; 
import errAvatar from '../images/errorAvatar.jpeg'; 



class DevFinderApp extends React.Component{
    constructor(props){
        super(props); 
        this.state={
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

    setErrorState(){
        this.setState({
            avatar : errAvatar,
        })
    }




    render(){
        return (
            <div className="DevFinderApp DevFinderAppLight">

                <Header />
                <SearchBox  onInputChange={this.handleInputChange}
                            onSearchBtnClick={this.handleSearchBtnClick}/>

                <ProfileBox name={this.state.name}
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
