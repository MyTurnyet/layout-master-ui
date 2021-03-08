import React, {ReactElement} from "react";
import Layout from "./components/Layout";
import {BrowserRouter as Router} from "react-router-dom";

export type PageProps = {
    siteName?: string
}

class App extends React.Component<PageProps> {
    static defaultProps: PageProps = {siteName: "Layout Master"}

    render(): ReactElement {
        return (
            <Router>
                <main>
                    <Layout siteName={this.props.siteName}/>
                </main>

            </Router>
        );
    }
}

export default App;
