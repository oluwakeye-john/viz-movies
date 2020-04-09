import React, {Component} from "react";
import ListMain from "../List";
import { connect } from "react-redux";

class Popular extends Component{
    handleNextPage = () => {
        const page = this.props.popular_page;
        this.props.set_popular_page(page+1)
        this.fetchData(page + 1)
    };

    handlePreviousPage = () => {
        const page = this.props.popular_page;
        if (page <= 1){

        }
        else {
            this.props.set_popular_page(page-1)
            this.fetchData(page - 1)
        }
    };

    fetchData = (page= 1) => {
        this.props.set_popular_fetching(true);
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=${page}`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_popular(resp.results)
                this.props.set_popular_fetching(false);
            });
    };

    render() {
        return (
            <div>
                <br />
                <ListMain movies={this.props.popular} is_fetching={this.props.popular_is_fetching} message="Popular Movies"/>
                {
                    this.props.popular_is_fetching === false
                    &&
                    <div className="text-center">
                        <button className="btn" onClick={this.handlePreviousPage}>Previous</button>
                        <button className="btn"> {this.props.popular_page} </button>
                        <button className="btn" onClick={this.handleNextPage}>Next</button>
                    </div>
                }
                <br />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.PopularReducer.popular,
        popular_page: state.PopularReducer.popular_page,
        popular_is_fetching: state.PopularReducer.is_fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        init_popular: (movies) => dispatch({
            type: "INIT_POPULAR",
            payload: movies
        }),

        set_popular_fetching: (is_fetching) => dispatch({
            type: "SET_POPULAR_FETCHING",
            payload: is_fetching
        }),

        set_popular_page : (page) => dispatch({
            type: "SET_POPULAR_PAGE",
            payload: page
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular)