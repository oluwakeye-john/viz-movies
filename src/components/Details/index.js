import React, {Component} from "react";
import Loader from "../Loader";
import Overview from "../Overview";
import Videos from "../Videos";
import Images from "../Images";
import Credits from "../Credits";

class Detail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id : null,
            movie : null,
            category: 1
        }
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.match.params.id !== this.state.id){
            console.log("Found it")
            this.setState({
                id: nextProps.match.params.id
            })
            this.fetchData(nextProps.match.params.id)
        }
    }

    fetchData = (id=this.props.match.params.id) => {
        //const id = this.props.match.params.id;
        this.setState({
            id: id
        });

        this.setState({
            is_fetching: true
        });

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=38856360af15f1dd5788856198563c73&append_to_response=videos,images,credits,similar,recommendations`)
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
                {
                    this.state.is_fetching
                    &&
                    <Loader />
                }
                {
                    this.state.is_fetching === false
                    &&
                    <DetailCategory movie={this.state.movie}/>
                }
            </div>
        );
    }
}

class DetailCategory extends Component{
    constructor(props) {
        super(props);
        this.state = {
            category: 0
        }
    }

    handleCategoryChange = (index) => {
        this.setState({
            category:index
        })
    };

    render() {
        return (
            <div>
                <DetailTab onCategoryChange={this.handleCategoryChange} category={this.state.category} />
                {
                    this.state.category === 0
                    &&
                    <Overview movie={this.props.movie} history={this.props.history} />
                }
                {
                    this.state.category === 1
                    &&
                    <Images movie={this.props.movie} />
                }
                {
                    this.state.category === 2
                    &&
                    <Videos movie={this.props.movie} />
                }
                {
                    this.state.category === 3
                    &&
                    <Credits movie={this.props.movie} />
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
                    {
                        ['Overview', 'Images', 'Videos', 'Cast'].map((cat, index) => {
                                const className = this.props.category === index ? 'bg-dark nav-link col-link' : 'nav-link col-link';
                                return (
                                    <li className="nav-item hoverable" key={index}>
                                        <a className={className} onClick={() => this.props.onCategoryChange(index)}>{cat}</a>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default Detail;