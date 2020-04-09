import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Home from "../Home";
import Upcoming from "../Upcoming";
import Detail from "../Details";
import SearchMovies from "../SearchMovies";
import NotFound from "../NotFound";
import Popular from "../Popular";

class Red extends Component {
    render() {
        return <Redirect to="/popular" />
    }
}

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Red} />
                <Route exact path="/search" component={SearchMovies} />
                <Route exact path="/popular" component={Popular} />
                <Route exact path="/upcoming" component={Upcoming} />
                <Route exact path="/:id" component={Detail} />
                <Route component={NotFound} />
            </Switch>
        )

    }
}

export default Routes