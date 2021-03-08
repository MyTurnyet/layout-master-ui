import React, {Component, ReactElement} from "react";
import './NavBar.scss'
import NavButton, {NavButtonProps} from "./NavButton";

export type NavBarProps = {
    buttons: NavButtonProps[]
}

class NavBar extends Component<NavBarProps> {
    render(): ReactElement {
        return (
            <div className="NavBar">
                {this.props.buttons && this.props.buttons.map(
                    buttonProp =>
                        (<NavButton key={buttonProp.path}
                                    path={buttonProp.path}
                                    icon={buttonProp.icon}
                                    label={buttonProp.label}/>)
                )}
            </div>
        );
    }
}


export default NavBar;
