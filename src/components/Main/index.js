import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {AnimatedSwitch} from "react-router-transition"
import SearchMovies from "../SearchMovies";
import NotFound from "../NotFound";
import Popular from "../Popular";
import Navbar from "../Navbar";
import Upcoming from "../Upcoming";
import Detail from "../Details";
import '../App/App.css';


class Main extends Component{
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <br />
                <ScrollRestore>
                    <Switch>
                        <Route exact path="/" component={SearchMovies} />
                        <Route exact path="/popular" component={Popular} />
                        <Route exact path="/upcoming" component={Upcoming} />
                        <Route exact path="/:id" component={Detail} />
                        <Route exact path="/:id/images" component={Detail} />
                        <Route component={NotFound} />
                    </Switch>
                </ScrollRestore>
            </BrowserRouter>
        );
    }
}

class ScrollRestore extends Component{
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Updated")
        if (this.props.location.pathname !== prevProps.location.pathname){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }

    render() {
        return (
            <React.Fragment>{this.props.children}</React.Fragment>
        );
    }
}

export default Main