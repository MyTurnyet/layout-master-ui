import React, {FunctionComponent} from "react";
import {useLocation} from "react-router-dom";
import './NavBar.scss'
import NavButton, {NavButtonProp} from "./NavButton";

export type NavBarProps = {
    buttons: NavButtonProp[]
}

const NavBar: FunctionComponent<NavBarProps> = (props) => {
    const currentLocation = useLocation().pathname;

    return (<div className="NavBar">
            {props.buttons.map(
                (buttonProp: NavButtonProp, index: number) => {
                    return (<NavButton key={index}
                                       {...buttonProp}
                                       isActive={buttonProp.path == currentLocation}
                    />)
                })
            }
        </div>
    )

};


export default NavBar;
