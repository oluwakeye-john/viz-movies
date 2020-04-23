import React, { Component } from "react";
import Footer from "../Footer";
import '../App/App.css';

import Routes from "../Routes"

import ScrollRestore from "../ScrollRestore"

import './App.css';

import { connect } from "react-redux"

class App extends Component {
    init_popular = () => {
        this.props.set_popular_fetching(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=1`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_popular(resp.results)
                this.props.set_popular_fetching(false);
            });
    }

    init_upcoming = () => {
        this.props.set_upcoming_fetching(true)
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=1`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_upcoming(resp.results)
                this.props.set_upcoming_fetching(false);
            });
    };

    init_carousel = (num = 3) => {
        this.props.set_carousel_fetching(true)
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=1`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_carousel(resp.results.slice(0, 3));
                this.props.set_carousel_fetching(false);
            });
    };

    init_top = (num = 10) => {
        this.props.set_top_fetching(true)
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=1`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_top(resp.results);
                this.props.set_top_fetching(false);
            });
    };


    componentDidMount() {
        this.init_popular();
        this.init_upcoming();
        this.init_carousel();
        this.init_top();
    }

    render() {
        return (
            <div>
                <Routes />
                <p className="text-center">By oluwakeyejohn</p>
                <a href="#top"><span className="fas fa-chevron-up top rounded"></span></a>
                <button className="sub btn rounded"><span className="fas fa-envelope-open"></span></button>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        popular: state.PopularReducer.popular,
        upcoming: state.UpcomingReducer.upcoming,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        init_popular: (movies) => dispatch({
            type: "INIT_POPULAR",
            payload: movies
        }),
        init_upcoming: (movies) => dispatch({
            type: "INIT_UPCOMING",
            payload: movies
        }),
        init_carousel: (movies) => dispatch({
            type: "INIT_CAROUSEL",
            payload: movies
        }),
        init_top: (movies) => dispatch({
            type: "INIT_TOP",
            payload: movies
        }),
        
        set_carousel_fetching: (is_fetching) => dispatch({
            type: "SET_CAROUSEL_FETCHING",
            payload: is_fetching
        }),
        set_upcoming_fetching: (is_fetching) => dispatch({
            type: "SET_UPCOMING_FETCHING",
            payload: is_fetching
        }),
        set_popular_fetching: (is_fetching) => dispatch({
            type: "SET_POPULAR_FETCHING",
            payload: is_fetching
        }),
        set_top_fetching: (is_fetching) => dispatch({
            type: "SET_TOP_FETCHING",
            payload: is_fetching
        }),
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
