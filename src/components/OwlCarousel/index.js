import React, {Component} from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Carousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            resp : {},
            type: "small"
        }
    }
    componentDidMount() {
        if (this.props.type === "big"){
            this.setState({
                type: "big",
                resp: {
                    responsive :{
                        0: {
                            items: 1,
                        },
                        600: {
                            items: 1,
                        },
                        1000: {
                            items: 1,
                        }
                    }
                }
            })
        }
        else {
            this.setState({
                type: "small",
                resp: {
                    responsive :{
                        0: {
                            items: 3,
                        },
                        600: {
                            items: 3,
                        },
                        1000: {
                            items: 6,
                        }
                    }
                }
            })
        }
    }

    render() {
        return (
            <OwlCarousel
                className="owl-carousel owl-theme"
                nav
                autoplay={this.props.autoplay || false}
                dots={false}
                loop={this.props.loop || false}
                margin={10}
                responsive={this.state.resp.responsive}
            >
                {
                    this.props.movies.map((movie, index) => (
                        <div className="item" key={index}>
                            <Link to={`/${movie.id}`}>
                                {
                                    this.props.type  === "small"
                                    &&
                                    <img alt={movie.title} className="img-fluid rounded" key={index} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                                }
                                {
                                    this.props.type === "big"
                                    &&
                                    <div className="image-main">
                                        <img alt={movie.title} className="img-fluid rounded main-carousel" key={index} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                                        <div className="col-lg-11 font-weight-bold font-italic">
                                            <p className="image-text">{movie.overview}</p>
                                            <h4 className="image-heading text-center">{movie.title}</h4>
                                        </div>
                                    </div>
                                }
                            </Link>
                        </div>
                    ))
                }
                {
                    this.props.more_link
                    &&
                    <Link to={this.props.more_link}><span className="item fas fa-chevron-circle-right fa-6x" style={{marginTop: "30px"}}></span></Link>
                }
                {
                    this.props.more_link === false || this.props.more_link === null
                    &&
                    <span className="item fas fa-chevron-circle-right fa-6x" style={{marginTop: "30px"}}></span>
                }
            </OwlCarousel>
        );
    }
}

export default Carousel;