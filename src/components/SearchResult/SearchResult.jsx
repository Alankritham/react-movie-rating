import React, { Component } from 'react';
import PosterImage from '../PosterImage/PosterImage'; 
import '../SearchResult/SearchResult.css';

import {Link} from 'react-router-dom';

class SearchResult extends Component {
    render(){
        return(
            <div className="Search-surround">
                <p style ={{color:"black"}}>{this.props.movieDetails.Title} </p>
                <PosterImage validPoster = {this.props.movieDetails.Poster}/>
                <p><Link className="Search-link" to = {`/movie/${this.props.movieDetails.imdbID}`}> Go to Movie</Link></p>
            </div>
        )

    };
}

export default SearchResult ;