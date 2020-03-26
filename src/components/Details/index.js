import React, {Component} from "react";
import Loader from "../Loader";

class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : null,
            movie : null,
            category: 1
        }
    };

    fetchData = () => {
        const id = this.props.match.params.id;
        this.setState({
            id: id
        });

        this.setState({
            is_fetching: true
        });

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=38856360af15f1dd5788856198563c73&append_to_response=videos,images`)
            .then((resp) => resp.json())
            .then(resp => {
                console.log(resp);
                this.setState({
                    movie: resp
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
            <div className="container-fluid">
                <DetailTab />
                {
                    this.state.is_fetching
                    &&
                    <Loader />
                }
                {
                    this.state.is_fetching === false
                    &&

                    <div className="row">
                        <div className="col-lg-7">
                            <img alt={this.state.movie.title} style={{marginBottom: "40px"}} className="img-fluid rounded waves-effect shadow-lg" src={`https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path}`}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="container">
                                <h1 className="h1-responsive text-center">{this.state.movie.title}</h1>
                                <hr /><br />
                                <h4 className="text-center text-muted"><i>"{this.state.movie.tagline}"</i></h4>
                                <br />
                                {
                                    this.state.movie.genres.map((genre) => (
                                        <strong>{genre.name} | </strong>
                                    ))
                                }

                                <br /><br />
                                <div className="row">
                                    <div className="col-4">
                                        <p className="rating-star"><span className="fas fa-star"> {this.state.movie.vote_average}</span></p>
                                    </div>
                                    <div className="col-4">
                                        <p><span className="fas fa-clock"> {Math.ceil(this.state.movie.runtime/60)}hr {this.state.movie.runtime %60}min</span></p>
                                    </div>
                                    <div className="col-4">
                                        <p><span className="fas fa-box"> {this.state.movie.release_date}</span></p>
                                    </div>
                                </div>

                                <br />
                                <h5><strong>Overview</strong></h5>
                                <p>{this.state.movie.overview}</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

class DetailTab extends Component{
    render() {
        return (
            <div>
                <ul className="nav justify-content-center lighten-4 py-4">
                    <li className="nav-item">
                        <a className="nav-link col-link bg-dark" href="#!">Overview</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link col-link" href="#!">Images</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link col-link" href="#!">Videos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link col-link" href="#!">Cast</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Detail;