import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Katmobile</h2>
          <h3>The future is here</h3>
        </div>
        <p className="App-intro">
          To get started, point your phone at your system and yell loudly
        </p>
      </div>
    );
  }
}

export default App;
