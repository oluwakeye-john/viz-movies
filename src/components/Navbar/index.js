import React, {Component} from "react";
import {Link} from "react-router-dom";

class Navbar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top scrolling-navbar">
                <a className="navbar-brand" href="#">Viz</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/"><a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/popular"><a className="nav-link" href="#">Popular</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/upcoming"><a className="nav-link" href="#">Upcoming</a></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <div className="custom-control custom-switch nav-item">
                            <input type="checkbox" className="custom-control-input" id="customSwitches" />
                                <label className="custom-control-label" htmlFor="customSwitches">Theme</label>
                        </div>
                    </ul>

                </div>
            </nav>
        );
    }
}

export default Navbar;