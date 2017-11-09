import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Rating</h1>
        </header>
        <p className="App-intro">
        <div id="search" className="Search">
        <input className="Search-bar" onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="search" placeholder="Search for a title..."/>
      </div>
        </p>
      </div>
    );
  }
}

export default App;
