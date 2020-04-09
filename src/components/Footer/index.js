import React, {Component} from "react";

class Footer extends Component{
    render() {
        return (
            <div className="bg-dark footer">
                <br />
                <p className="text-center font-weight-bold">© {(new Date()).getFullYear()}</p>
                <p className="text-center font-weight-bold">By Oluwakeye John</p>
            </div>
        );
    }
}

export default Footer