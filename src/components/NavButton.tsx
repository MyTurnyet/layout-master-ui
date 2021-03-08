import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./NavButton.scss";

export type NavButtonProps ={
    path: string;
    icon: IconDefinition;
    label: string;
}

class NavButton extends Component<NavButtonProps> {
    render(): ReactElement {
        return (
            < div className="NavButton">
                <Link to={this.props.path}>
                    <div className="Icon">
                        <FontAwesomeIcon icon={this.props.icon}/>
                    </div>
                    <span className="Label">{this.props.label}</span>
                </Link>
            </div>
        );
    }
}

export default NavButton;
