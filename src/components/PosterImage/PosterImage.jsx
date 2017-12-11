import React, {Component} from "react";

class PosterImage extends Component {

    

    render = () => {
        if(this.props.validPoster === "N/A"){
            return (
                <h3>No Image Provided</h3>
            );
        } return (<img src = {this.props.validPoster} alt="Bleh"/>);
    }

};

export default PosterImage;
