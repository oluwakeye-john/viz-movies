import React, {Component} from "react";
import {Link} from "react-router-dom";
import Loader from "../Loader";

class ListMain extends Component{
    render() {
        return (
            <div className="container">
                {
                    this.props.is_fetching
                    &&
                    <Loader />
                }
                {
                    this.props.is_fetching === false
                    &&
                    <List message={this.props.message} movies={this.props.movies} />
                }
            </div>
        );
    }
}

class List extends Component{
    render() {
        return (
            <div>
                <p><strong>{this.props.message}</strong></p>
                <div className="row">
                    {
                        this.props.movies.map((movie, index) => (
                            <div  key={index} className="col-6 col-sm-4 col-md-3  col-lg-3">
                                <ListEach movie={movie} index={index}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

class ListEach extends Component{
    render() {
        return (
            <div className="view overlay zoom hoverable animated fadeIn" >
                {
                    this.props.movie.poster_path
                    &&
                    <img alt={this.props.movie.title} style={{marginBottom: "40px"}} className="img-fluid rounded waves-effect" src={`https://image.tmdb.org/t/p/w500/${this.props.movie.poster_path}`}/>
                }
                {
                    this.props.movie.poster_path === null
                    &&
                    <img alt={this.props.movie.title} style={{marginBottom: "40px"}} className="img-fluid rounded" src={`not_found.jpg`}/>
                }
                <Link to={`/${this.props.movie.id}`}><div className="mask flex-center rgba-black-strong">
                    <h6 className="white-text font-italic">{this.props.movie.title}</h6>
                    <br />
                </div></Link>
            </div>
        );
    }
}

export default ListMain