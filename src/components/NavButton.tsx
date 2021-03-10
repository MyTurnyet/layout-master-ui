import React, {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import {IconLookup} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "components/NavButton.scss";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";

export interface ActiveComponent {
    isActive: boolean;
}

export type NavButtonProp = {
    path: string;
    icon: string;
    label: string;
}

const NavButton: FunctionComponent<NavButtonProp & ActiveComponent>
    = (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iconLookup: IconLookup = {prefix: "fas", iconName: props.icon};
    const iconDefinition = findIconDefinition(iconLookup);
    return (
        < div className={`NavButton ${props.isActive ? 'active' : ''}`}>
            <Link to={props.path}>
                <div className={`Icon ${props.isActive ? 'active' : ''}`}>
                    <FontAwesomeIcon icon={iconDefinition}/>
                </div>
                <span className="Label">{props.label}</span>
            </Link>
        </div>
    );
}

export default NavButton;
