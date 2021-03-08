import React, {ReactElement} from "react";
import {PageProps} from "../App";
import NavBar, {NavBarProps} from "./NavBar";
import Header from "./Header";
import '../index.scss'
import './Layout.scss'
import HomePage from "../HomePage";
import {Route} from "react-router-dom";
import {faHome} from "@fortawesome/free-solid-svg-icons";


class Layout extends React.Component<PageProps> {

    navBarProps: NavBarProps = {
        buttons: [
            {
                icon: faHome,
                path: "/",
                label: "Home"
            },
        ]
    }

    render(): ReactElement {
        return (
            <div className="Layout">
                <Header siteName={this.props.siteName}/>
                <div className={"Content"}>
                    <Route path={'/'} component={HomePage}/>
                </div>
                <NavBar {...this.navBarProps}/>
            </div>
        );
    }
}

export default Layout;

