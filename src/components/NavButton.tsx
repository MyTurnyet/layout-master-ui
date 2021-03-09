import React, {Component, ReactElement} from "react";
import {Link} from "react-router-dom";
import {IconLookup} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./NavButton.scss";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface ActiveComponent {
    isActive: boolean;
}

export type NavButtonProps = {
    path: string;
    icon: string;
    label: string;
}

class NavButton extends Component<NavButtonProps & ActiveComponent> {

    render(): ReactElement {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const iconLookup: IconLookup = {prefix: "fas", iconName: this.props.icon};
        const iconDefinition = findIconDefinition(iconLookup);
        return (
            < div className={`NavButton ${this.props.isActive ? 'active' : ''}`}>
                <Link to={this.props.path}>
                    <div className={`Icon ${this.props.isActive ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={iconDefinition}/>
                    </div>
                    <span className="Label">{this.props.label}</span>
                </Link>
            </div>
        );
    }
}

export default NavButton;
