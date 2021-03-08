import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export type NavButtonProps = {
    path: string;
    icon: IconDefinition;
    label: string;
}

class NavButton extends Component< NavButtonProps> {
    render(): ReactElement {
        return (
            < div className="NavButton">
                < div className="Icon">{this.props.icon}</div>
                <span className="Label">{this.props.label}</span>
                < Link to={this.props.path}>
                    TEST
                </Link>
            </div>
        );
    }
}

export default NavButton;
