import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";
import {Link} from "react-router-dom";
import {PageProps} from "pages/App";
import './Header.scss'
import {IconLookup} from "@fortawesome/free-solid-svg-icons";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";

class Header extends React.Component<PageProps> {
    render(): ReactElement {
        const icons = ["train", "dragon", "jedi", "code-branch", "poop", "puzzle-piece", "subway", "horse"];
        const currentIcon = icons[Math.floor(Math.random() * icons.length)];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const iconLookup: IconLookup = {prefix: "fas", iconName: currentIcon};
        const iconDefinition = findIconDefinition(iconLookup);
        return (
            <div className="Header">
                <div className={"Icon"}>
                    <FontAwesomeIcon icon={iconDefinition}/>
                </div>
                <Link to={"/"}>
                    {this.props.siteName}
                </Link>
            </div>
        );
    }
}

export default Header;
