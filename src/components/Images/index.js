import React, {Component} from "react";


class Images extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.movie.images.backdrops.map((image, index) => (
                            <figure className="col-md-4" key={index}>
                                <a href={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                                   data-size="1600x1067" target="_blank">
                                    <img src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                         className="img-fluid z-depth-1" />
                                </a>
                            </figure>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default Images