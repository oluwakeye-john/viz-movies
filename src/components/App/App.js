import React, {Component} from 'react';
import './App.css';
import Navbar from "../Navbar";
import Main from "../Main";

class App extends Component{
    render() {
        return (
            <div>
                <Main />
                <a href="#"><span className="fas fa-chevron-up top rounded"></span></a>
                <button className="sub btn rounded"><span className="fas fa-envelope-open"></span></button>
            </div>
        );
    }
}

export default App;
