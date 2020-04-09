import React, {Component} from "react";

class Credits extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.movie.credits.cast.map((cast, index) => (
                            <div className="col-6 col-lg-2" key={index} style={{marginBottom: "20px"}}>
                                {
                                    cast.profile_path
                                    &&
                                    <img className="img-fluid" src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} />
                                }
                                {
                                    cast.profile_path === null
                                    &&
                                    <img className="img-fluid" src="not_found.jpg" />
                                }
                                <span>{cast.name}</span>
                                <br />
                                <h6 style={{color: "gold"}}>{cast.character}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Credits;