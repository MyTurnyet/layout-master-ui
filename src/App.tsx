import './index.scss'
import React, {ReactElement} from "react";
import Layout from "./components/Layout";

export type PageProps = {
    siteName: string
}

class App extends React.Component<PageProps> {
    static defaultProps = {siteName: "Layout Master"}

    render(): ReactElement {
        return (
            <div className="App">
                <Layout siteName={this.props.siteName}>
                    APP Page
                </Layout>
            </div>
        );
    }
}

export default App;
