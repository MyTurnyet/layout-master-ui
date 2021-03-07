import React, {ReactElement} from "react";
import {PageProps} from "../App";
import './Header.scss'

class Header extends React.Component<PageProps> {
    render(): ReactElement {
        return (
            <div className="Header">
                HEADER
            </div>
        );
    }
}

export default Header;
