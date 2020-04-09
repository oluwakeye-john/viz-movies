import React, {Component} from "react";
import ListMain from "../List";
import { connect } from "react-redux";

class Upcoming extends Component{
    handleNextPage = () => {
        const page = this.props.upcoming_page;
        this.props.set_upcoming_page(page+1)
        this.fetchData(page + 1)
    };

    handlePreviousPage = () => {
        const page = this.props.upcoming_page;
        if (page <= 1){

        }
        else {
            this.props.set_upcoming_page(page-1)
            this.fetchData(page - 1)
        }
    };

    fetchData = (page= 1) => {
        this.props.set_upcoming_fetching(true);
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=${page}`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp.results);
                this.props.init_upcoming(resp.results)
                this.props.set_upcoming_fetching(false);
            });
    };

    render() {
        return (
            <div>
                <br />
                <ListMain movies={this.props.upcoming} is_fetching={this.props.upcoming_is_fetching} message="Upcoming Movies"/>
                {
                    this.props.upcoming_is_fetching === false
                    &&
                    <div className="text-center">
                        <button className="btn" onClick={this.handlePreviousPage}>Previous</button>
                        <button className="btn"> {this.props.upcoming_page} </button>
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
        upcoming: state.UpcomingReducer.upcoming,
        upcoming_page: state.UpcomingReducer.upcoming_page,
        upcoming_is_fetching: state.UpcomingReducer.is_fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        init_upcoming: (movies) => dispatch({
            type: "INIT_UPCOMING",
            payload: movies
        }),

        set_upcoming_fetching: (is_fetching) => dispatch({
            type: "SET_UPCOMING_FETCHING",
            payload: is_fetching
        }),

        set_upcoming_page : (page) => dispatch({
            type: "SET_UPCOMING_PAGE",
            payload: page
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming)