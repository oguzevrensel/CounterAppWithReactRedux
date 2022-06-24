import React from 'react';
import logo from './logo.svg';
import Counter from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Counter Application
        </p>
        <span>
          <span>Visit </span>
          <a
            className="App-link"
            href="https://www.oguzevrensel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Website
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/oguz-evrensel-9375391a9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://github.com/oguzevrensel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          
        </span>
      </header>
    </div>
  );
}

export default App;
