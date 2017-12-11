import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PosterImage from '../PosterImage/PosterImage'; 
import '../Movie/Movie.css';

class Movie extends Component {

    componentWillMount = () => {
        this.setState({movieDetails : []});
        console.log("@@@",this.props.match.params)
        console.log('http://www.omdbapi.com/?apikey=2cb846f4&i='+this.props.match.params.movieId);
        fetch('http://www.omdbapi.com/?apikey=2cb846f4&i='+this.props.match.params.movieId)
        .then((data) => data.json())
        .then((data) => {
          // your JSON data is stored in: data
          console.log(data);
          this.setState({movieDetails : data});
       });
      };

    displayRatings = (ratings = []) => {
        return ratings.map((value,index) => {
            return <p key = {index}><span className = "main-tag">{value.Source} :</span> {value.Value}</p>
          })
    };

    render = () => {
        
        return (
            <div>
                <div className = "title">{this.state.movieDetails.Title}</div>
                <span className="left"><PosterImage validPoster = {this.state.movieDetails.Poster}/></span>
                <span className="right"><p><span className = "main-tag">Actors: </span> {this.state.movieDetails.Actors}</p>
                <p><span className = "main-tag">Director: </span>{this.state.movieDetails.Director}</p>
                <p><span className ="main-tag">Genre: </span> {this.state.movieDetails.Genre}</p>
                <p><span className ="main-tag">Released: </span> {this.state.movieDetails.Released}</p> 
                <p><span className ="main-tag">Plot: </span> {this.state.movieDetails.Plot}</p> 
                <p><span className = "main-tag">Year: </span> {this.state.movieDetails.Year}</p>             
                <p className="ratings">Ratings: {this.displayRatings(this.state.movieDetails.Ratings)}</p></span>
                <div className = "move-back" ><Link className="return" to = "/" > Return to Search Page</Link></div>      
            </div>

        );
    };
}

export default Movie;