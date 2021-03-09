import React, {ReactElement} from "react";
import {PageProps} from "../App";
import NavBar, {NavBarProps} from "./NavBar";
import Header from "./Header";
import './Layout.scss'
import "../index.scss"
import HomePage from "../HomePage";
import {Route} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from '@fortawesome/free-solid-svg-icons'

class Layout extends React.Component<PageProps> {

    navBarProps: NavBarProps = {
        buttons: [
            {
                icon: "house-user",
                path: "/",
                label: "Home"
            },
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
                    <Route path={'/'} component={HomePage}/>
                </div>
                <NavBar {...this.navBarProps}/>
            </div>
        );
    }
}

export default Layout;

