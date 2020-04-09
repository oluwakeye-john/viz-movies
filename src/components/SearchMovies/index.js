import React, { Component } from "react";
import ListMain from "../List";
import { connect } from "react-redux";

class SearchMovies extends Component {

    componentDidMount() {
        this.props.set_search_fetching(false)
    }

    handleChange = (e) => {
        this.props.set_search_text(e.target.value)
        this.fetchSearch()
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    fetchSearch = () => {

        if (this.props.search_text !== "") {
            this.props.set_search_fetching(true)
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=38856360af15f1dd5788856198563c73&query=${this.props.search_text}`)
                .then((resp) => resp.json())
                .then(resp => {
                    console.log(resp.results);
                    this.props.init_search(resp.results)
                    this.props.set_search_fetching(false)
                });
        }
        else {
            this.props.init_search([])
            this.props.set_search_fetching(false)
        }
    }

    render() {
        return (
            <div>
                <br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">

                        </div>
                        <div className="col-lg-4">
                            <form onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <input className=" form-control" value={this.props.search_text} onChange={this.handleChange} type="search" placeholder="Search for Movies"
                                        aria-label="Search" />
                                
                                </div>

                            </form>
                        </div>
                    </div>
                    <hr /><br />


                </div>
                <ListMain movies={this.props.search} is_fetching={this.props.search_is_fetching} message="Search Result" />
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        search: state.SearchReducer.search,
        search_text: state.SearchReducer.search_text,
        search_is_fetching: state.SearchReducer.is_fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        init_search: (movies) => dispatch({
            type: "INIT_SEARCH",
            payload: movies
        }),

        set_search_fetching: (is_fetching) => dispatch({
            type: "SET_SEARCH_FETCHING",
            payload: is_fetching
        }),

        set_search_text: (search_text) => dispatch({
            type: "SET_SEARCH_TEXT",
            payload: search_text
        })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies)