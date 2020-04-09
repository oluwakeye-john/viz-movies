import React, { Component } from "react"
import { connect } from "react-redux";

import  {withRouter, Link} from "react-router-dom"

class SearchBox extends Component {
    handleChange = (e) => {
        this.props.set_search_text(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            
        );
    }
}

function mapStateToProps(state){
    return{
        search_text: state.SearchReducer.search_text
    }
}

function mapDispatchToProps(dispatch) {
    return {
        set_search_text: (search_text) => dispatch({
            type: "SET_SEARCH_TEXT",
            payload: search_text
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchBox))