import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//
// ReactDOM.render(
//     <Router>
//         <div>
//             <Route exact path="/" component={App}/>
//         </div>
//     </Router>
//     , document.getElementById('root')
// );
ReactDOM.render(
    <React.StrictMode>
        <App  siteName={"Layout Master"}/>
    </React.StrictMode>,
    document.getElementById("root")
);

