import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <nav className="navbar navbar-dark bg-dark justify-content-between">
          <h1 className="navbar-brand display-2 ml-3" >InstaDp</h1>
          <form className="form-inline ml-3">
            <input className="form-control mr-5" style={{width: "20em"}} type="search" placeholder="Enter Instagram Id" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </header>
    </div>
  );
}
export default App;
