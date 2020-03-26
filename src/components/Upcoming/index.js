import React, {Component} from "react";
import ListMain from "../List";

class Upcoming extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movies : [],
            is_fetching: false,
            page: 1
        }
    }

    handleNextPage = () => {
        const page = this.state.page;
        this.setState({
            page: page + 1
        });
        this.fetchData(page + 1)
    };

    handlePreviousPage = () => {
        const page = this.state.page;
        if (page <= 1){

        }
        else {
            this.setState({
                page: page - 1
            });
            this.fetchData(page - 1)
        }
    };

    fetchData = (page= 1) => {
        this.setState({
            is_fetching: true
        });
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=38856360af15f1dd5788856198563c73&language=en-US&page=${page}`)
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
    };

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div>
                <ListMain movies={this.state.movies} is_fetching={this.state.is_fetching} message="Popular Movies"/>
                {
                    this.state.is_fetching === false
                    &&
                    <div className="text-center">
                        <button className="btn" onClick={this.handlePreviousPage}>Previous</button>
                        <button className="btn"> {this.state.page} </button>
                        <button className="btn" onClick={this.handleNextPage}>Next</button>
                    </div>
                }
                <br/>
            </div>
        );
    }
}

export default Upcoming;