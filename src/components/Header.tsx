import React, {ReactElement} from "react";
import {PageProps} from "../App";
import './Header.scss'

class Header extends React.Component<PageProps> {
    render(): ReactElement {
        return (
            <div className="Header">
                {this.props.siteName}
            </div>
        );
    }
}

export default Header;
