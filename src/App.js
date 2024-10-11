import logo from './logo.svg';
import './App.css';
import  { app, getAppURL } from './firebase';
import { useEffect } from 'react';

console.log("App.js initializing, App: %o",app);


/**
 * App Component
 * @returns {JSX.Element}
 * @constructor
 * @see https://reactjs.org/docs/hooks-effect.html
 */
function App() {

  // on mount run once
  useEffect(() => {
    console.log("App.js useEffect[app], App: %o",app);
    // Retrieve the URL from the configuration
    const appURL = getAppURL();
    console.log("Firebase App URL:", appURL);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="app-text">
          ${!!app && (<div><b>${app?.name} | ${app?.authDomain}</b> is initialized!</div>)}
        </div>
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
