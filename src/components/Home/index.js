import React, { Component } from "react";

import Carousel from "../OwlCarousel";
import Loader from "../Loader";
import { Link } from "react-router-dom";

import { connect } from "react-redux"

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br />
                {
                    this.props.carousel_is_fetching && this.props.upcoming_is_fetching && this.props.popular_is_fetching && this.props.top_is_fetching
                    ? <Loader />
                    :<div className="row">
                        <div className="col-lg-9">
                            <h1 className="text-center font-italic animated bounceInRight">Viz Movies</h1>
                            <Carousel type="big" movies={this.props.carousel} loop={true} autoplay={true} more_link={false} />
                            <div>
                                <br />
                                <Link to="/popular"><h5 className="col-link">Popular movies <span className="fas fa-link">

                                </span> </h5></Link>
                                <br />
                                <Carousel type="small" movies={this.props.popular} />

                                <br />
                                <Link to="/upcoming"><h5 className="col-link">Upcoming movies <span className="fas fa-link fa-">

                                </span> </h5></Link>
                                <br />
                                <Carousel type="small" movies={this.props.upcoming} />

                                <br />
                                <h5>Top Rated movies</h5>
                                <br />
                                <Carousel type="small" movies={this.props.top} />
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        popular: state.PopularReducer.popular,
        upcoming: state.UpcomingReducer.upcoming,
        carousel: state.CarouselReducer.carousel,
        top: state.TopReducer.top,

        popular_is_fetching: state.PopularReducer.is_fetching,
        upcoming_is_fetching: state.UpcomingReducer.is_fetching,
        carousel_is_fetching: state.CarouselReducer.is_fetching,
        top_is_fetching: state.TopReducer.is_fetching,
    }
}

export default connect(mapStateToProps)(Home)