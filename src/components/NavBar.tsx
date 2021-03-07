import React, {ReactElement} from "react";
import {PageProps} from "../App";
import './NavBar.scss'

class NavBar extends React.Component<PageProps> {
    render(): ReactElement {
        return (
            <div className="NavBar" >
                NAVBAR
            </div>
        );
    }
}

export default NavBar;
