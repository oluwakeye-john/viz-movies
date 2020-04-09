import React, {Component} from "react";

import Carousel from "../OwlCarousel";

class Similar extends Component{
    render() {
        return (
            <div className="container-fluid">
                <hr /><br />
                <h5>Recommendations</h5>
                <br />
                <Carousel type="small" movies={this.props.similar.results} />
            </div>
        );
    }
}

export default Similar