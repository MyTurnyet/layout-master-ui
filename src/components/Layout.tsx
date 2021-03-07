import React, {ReactElement} from "react";
import {PageProps} from "../App";
import NavBar from "./NavBar";
import Header from "./Header";
import './Layout.scss'

class Layout extends React.Component<PageProps> {
    render(): ReactElement {
        return (
            <div className="Layout">
                <Header siteName={this.props.siteName}/>
                <div className={"Content"}>
                    {this.props.children}
                </div>
                <NavBar siteName={this.props.siteName}/>
            </div>
        );
    }
}

export default Layout;

