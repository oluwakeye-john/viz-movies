import React, {Component} from "react";

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


export default ScrollRestore