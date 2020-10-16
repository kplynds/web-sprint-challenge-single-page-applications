import React from "react";
import {render} from "react-dom";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom"
import App from "./App";

render (
    <Router>
        <App />
    </Router>
    , document.querySelector("#root")
)
