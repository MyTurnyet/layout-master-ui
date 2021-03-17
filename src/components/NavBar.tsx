import React, {FunctionComponent} from "react";
import {useLocation} from "react-router-dom";
import NavButton, {NavButtonProp} from "components/NavButton";
import styled from "styled-components";

export type NavBarProps = {
    buttons: NavButtonProp[]
}
const StyledNavBar = styled.div(props => `
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 60px;
  width: 100%;
  padding: 5px 0;
  background: ${props.theme.colors.primary.color};
  font-family: ${props.theme.font.core};
  font-size: 22px;
  box-shadow: 0px -2px 15px rgba(50, 50, 50, 0.45);
`);

const NavBar: FunctionComponent<NavBarProps> = (props) => {
    const currentLocation = useLocation().pathname;

    return (<StyledNavBar>
            {props.buttons.map(
                (buttonProp: NavButtonProp, index: number) => {
                    return (<NavButton key={index}
                                             {...buttonProp}
                                             isActive={buttonProp.path == currentLocation}
                    />)
                })
            }
        </StyledNavBar>
    )

};


export default NavBar;
