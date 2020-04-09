import React, {Component} from "react";


class Videos extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.movie.videos.results.map((video, index) => (
                            <div className="col-lg-4" style={{marginBottom: "20px"}}>
                                <div className="">
                                    <iframe height="315" key={index}
                                            src={`https://www.youtube.com/embed/${video.key}`}>
                                    </iframe>
                                    <p>{video.name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
};

export default Videos