import React, {Component, ReactElement} from "react";

export type HomePageProps = {
    userName?: string
}

class HomePage extends Component<HomePageProps> {
    static defaultProps: HomePageProps = {userName: ''};

    render(): ReactElement {
        return (
            <div className="HomePage">
                {this.props.userName === "" ? "Hello!" : "Hello " + this.props.userName}
            </div>
        );
    }

}

export default HomePage;
