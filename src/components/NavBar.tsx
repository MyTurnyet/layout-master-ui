import React, {Component, ReactElement} from "react";
import './NavBar.scss'
import NavButton, {NavButtonProps} from "./NavButton";

export type NavBarProps = {
    buttons: NavButtonProps[]
}

class NavBar extends Component<NavBarProps> {
    render(): ReactElement {
        const navButtonsArray = this.props.buttons.map(
            (buttonProp, index) =>
                (<NavButton key={index}
                            {...buttonProp}
                />)
        );
        return <div className="NavBar">
            {navButtonsArray}
        </div>;

    }

}


export default NavBar;
