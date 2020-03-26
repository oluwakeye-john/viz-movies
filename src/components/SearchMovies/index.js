import React, {Component} from "react";
import ListMain from "../List";

class SearchMovies extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            search: "",
            is_fetching: false
        }
    }

    handleSearchChange = (e) => {
        const search = e.target.value;
        this.setState({
            search: search
        });
        this.fetchSearch(search);
    };

    fetchSearch = search => {
        this.setState({
            is_fetching: true
        });
        console.log(search);

        if (search !== "" ){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=38856360af15f1dd5788856198563c73&query=${search}`)
                .then((resp) => resp.json())
                .then(resp => {
                    console.log(resp.results);
                    this.setState({
                        movies: resp.results
                    });
                    this.setState({
                        is_fetching: false
                    })
                });
        }
        else {
            this.setState({
                movies: [],
                is_fetching : false
            })
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-4 form-inline">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input className="form-control form-control-sm ml-3 w-75" type="search" placeholder="Search"
                               aria-label="Search" onChange={this.handleSearchChange} />
                    </div>
                </div>
                <hr /><br />

                <ListMain movies={this.state.movies} is_fetching={this.state.is_fetching} message="Search Result"/>
            </div>
        );
    }
}

export default SearchMovies