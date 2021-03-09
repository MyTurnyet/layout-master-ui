import React, {ReactElement} from "react";
import {fas} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import {PageProps} from "../pages/App";
import {Route, Switch} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import NavBar, {NavBarProps} from "./NavBar";

import './Layout.scss'
import "../pages/index.scss"

class Layout extends React.Component<PageProps> {

    navBarProps: NavBarProps = {
        buttons: [
            {
                icon: "house-user",
                path: "/",
                label: "Home"
            },
            {
                path: "/about",
                label: "About",
                icon: "info-circle"
            }
        ]
    }

    constructor(props: PageProps) {
        super(props);
        library.add(fas)
    }

    render(): ReactElement {
        return (
            <div className="Layout">
                <Header siteName={this.props.siteName}/>
                <div className={"Content"}>
                    <Switch>
                        <Route exact={true} path={'/'} component={HomePage}/>
                        <Route exact={true} path={'/about'} component={AboutPage}/>
                    </Switch>
                </div>
                <NavBar {...this.navBarProps}/>
            </div>
        );
    }
}

export default Layout;

