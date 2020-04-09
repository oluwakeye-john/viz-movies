import React, {Component} from "react";
import Similar from "../Similar";

class Overview extends Component{
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-7">
                        <img alt={this.props.movie.title}  className="backdrop img-fluid waves-effect waves-ripple" src={`https://image.tmdb.org/t/p/w780/${this.props.movie.backdrop_path}`}/>
                    </div>
                    <div className="col-lg-4">
                        <div className="container">
                            <h1 className="h1-responsive text-center">{this.props.movie.title}</h1>
                            <hr /><br />
                            {
                                this.props.movie.tagline
                                &&
                                <div>
                                    <h4 className="text-center text-muted"><i>"{this.props.movie.tagline}"</i></h4>
                                    <br />
                                </div>
                            }

                            {
                                this.props.movie.genres.map((genre, index) => {
                                    if (index === this.props.movie.genres.length-1){
                                        return (
                                            <strong key={index}>{genre.name}</strong>
                                        )
                                    }
                                    else {
                                        return (
                                            <strong key={index}>{genre.name} | </strong>
                                        )
                                    }
                                })
                            }

                            <br /><br />
                            <div className="row">
                                <div className="col-4">
                                    <p className="rating-star"><span className="fas fa-star"> {this.props.movie.vote_average}</span></p>
                                </div>
                                <div className="col-4">
                                    <p><span className="fas fa-clock"> {Math.ceil(this.props.movie.runtime/60)}hr {this.props.movie.runtime %60}min</span></p>
                                </div>
                                <div className="col-4">
                                    <p><span className="fas fa-box"> {this.props.movie.release_date}</span></p>
                                </div>
                            </div>

                            <br />
                            <h5><strong>Overview</strong></h5>
                            <p>{this.props.movie.overview}</p>
                        </div>
                    </div>
                </div>
                <Similar similar={this.props.movie.recommendations} history={this.props.history} />
            </div>
        );
    }
}

export default Overview