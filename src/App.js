import './App.css';
import DevFinderApp from './components/DevFinderApp'; 

function App() {
  return (
    <div  className="App">
      <DevFinderApp/>
    </div>
  );
}

export default App;


/*



  fetch('https://api.github.com/users/myrteza-labi').then((response)=> {
    response = response.json(); 
    response.then((result) => {
      
      console.log(result)
    })
  })


*/