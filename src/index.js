import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar";

import { Provider } from "react-redux"
import { createStore } from "redux"

import MainReducer from "./store/reducers"

import { composeWithDevTools } from 'redux-devtools-extension';
import ScrollRestore from './components/ScrollRestore';

let store = createStore(MainReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter >
      <ScrollRestore />
      <Navbar />
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();