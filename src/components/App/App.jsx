import React, { Component } from 'react';
import '../App/App.css';
import QueryTitle from '../QueryTitle/QueryTitle';
import SearchResult from '../SearchResult/SearchResult';

class App extends Component {

  componentWillMount = () => {
    this.setState({searchResult : []});
  };

  handleKeyUp = (event) => {
    if(event.key === 'Enter'){
      console.log("search");
      this.setState({movieTitle : event.target.value});
      fetch('http://www.omdbapi.com/?apikey=2cb846f4&s='+event.target.value)
        .then((data) => data.json())
        .then((data) => {
          // your JSON data is stored in: data
          console.log(data.Search);
          this.setState({searchResult : data.Search || []});
       });
    }
  };
  
  render() {
    return (
     
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Rating</h1>
        </header> 
        <div id="search" className="Search">
          <input className="Search-bar" onKeyUp={this.handleKeyUp} type="search" placeholder="Search for a title..."/>
          <QueryTitle searchQuery = {this.state.movieTitle}/>
          {this.state.searchResult.map((value,index) => {
            return <SearchResult key={index} movieDetails={value}/>
          })}
          
        </div>
      </div>
    );
  }
}

export default App;
