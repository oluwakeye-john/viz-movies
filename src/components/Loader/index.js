import React, {Component} from "react";

class Loader extends Component{
    render() {
        return (
            <div className="container">
                <div style={{position: "fixed", top: "48%", left: "48%"}}  className="spinner-grow" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }
}

export default Loader;