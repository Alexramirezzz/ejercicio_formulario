import logo from './logo.svg';
import './App.css';
import './components/login.jsx';
import Login from  './components/login.jsx';

function App() {
  return (
    <div className="App">
      <h1>Formulario basico:</h1>
      <Login></Login>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
