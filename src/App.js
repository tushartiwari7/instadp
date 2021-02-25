import './App.css';
import {useState} from 'react'

function App() {

  var [username,setUsername] = useState(null);
  function usernameHandler(e) {
    setUsername(e.target.value);
  }
  
  function apiHandler(event) {
      event.preventDefault();
      console.log("api called");

      var url="https://www.instagram.com/" + username + "/?__a=1";

      fetch(url, {mode: 'no-cors'})
      .then(response => response.text())
      .then(result => console.log(JSON.parse(result,null,'\t')))
      .catch(error => alert("gaand maraa gya bsdk", error))
  }

  return (
    <div className="App">
      <header>

        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <h1 className="navbar-brand display-2 ml-3" >InstaDp</h1>
          <form className="form-inline mr-lg-3" >
            <input className="form-control mr-sm-3" 
              style={{width: "20em"}} 
              type="search" 
              onChange={usernameHandler}
              placeholder="Enter Instagram Id" 
              aria-label="Search" 
            />
            <button 
                className="btn btn-outline-success my-2 my-sm-0" 
                onClick={apiHandler} 
                type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>
    </div>
  );
}
export default App;
