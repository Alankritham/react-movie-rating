import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QueryTitle from './QueryTitle';

class App extends Component {

  componentWillMount = () => {
    this.state = {};
  };

  handleChange = (event) => {
    console.log(event.target.value);

    this.setState({value : event.target.value});

  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Rating</h1>
        </header>
        <QueryTitle value = {this.state.value}/>
        <p className="App-intro">
        <div id="search" className="Search">
        <input className="Search-bar" onChange={this.handleChange} type="search" placeholder="Search for a title..."/>
      </div>
        </p>
      </div>
    );
  }
}

export default App;
