import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark shadow sticky-top scrolling-navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#">Viz</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">

                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <NavLink to="/search" className="nav-link">
                                <a className="nav-link">Search</a>
                            </NavLink>
                            <NavLink to="/popular" className="nav-link">
                                <a className="nav-link">Popular</a>
                            </NavLink>
                            <NavLink to="/upcoming" className="nav-link">
                                <a className="nav-link">Upcoming</a>
                            </NavLink>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }
}


export default Navbar;