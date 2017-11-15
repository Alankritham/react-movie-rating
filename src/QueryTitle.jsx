import React, {Component} from "react";

class QueryTitle extends Component {

    render = () => {
        return (
            <h3> You searched for : {this.props.value}</h3>
        );
    }

};

export default QueryTitle;
