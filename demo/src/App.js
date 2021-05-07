import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        <h1>Hello, Sukarna Jana</h1>
      </p>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Its My First React Based Project
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
