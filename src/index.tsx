import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import "./pages/index.scss";

ReactDOM.render(
    <React.StrictMode>
        <App  siteName={"Layout Master"}/>
    </React.StrictMode>,
    document.getElementById("root")
);

