import React, {Component} from "react";
import '../QueryTitle/QueryTitle.css';

class QueryTitle extends Component {

    render = () => {
        return (
            <div>
                <h2 className = "Search-result"> Your search results for : {this.props.searchQuery} </h2> 
            </div>
        );
    }

};

export default QueryTitle;
