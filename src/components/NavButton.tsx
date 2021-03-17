import React, {FunctionComponent} from "react";
import {Link} from "react-router-dom";
import {IconLookup} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import "components/NavButton.scss";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";
import {SiteTheme} from "../theme/theme";

export interface ActiveComponent {
    isActive: boolean;
}

export type NavButtonProp = {
    path: string;
    icon: string;
    label: string;
    theme?: SiteTheme;
}

const NavLabel = styled.span`
  font-size: 12px;
  text-transform: capitalize;
`;


const NavButtonIcon = styled.div<ActiveComponent>(props => `
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  background: ${props.theme.colors.primary.color};
  svg {
    ${props.isActive ? 'filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, .4));' : ''}
  }
`);

const NavButton: FunctionComponent<NavButtonProp & ActiveComponent>
    = (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const iconLookup: IconLookup = {prefix: "fas", iconName: props.icon};
    const iconDefinition = findIconDefinition(iconLookup);
    return (
        <StyledNavIcon {...props}>
            <Link to={props.path}>
                <NavButtonIcon isActive={props.isActive}>
                    <FontAwesomeIcon icon={iconDefinition}/>
                </NavButtonIcon>
                <NavLabel>{props.label}</NavLabel>
            </Link>
        </StyledNavIcon>
    );
}

const StyledNavIcon = styled.div<ActiveComponent>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  a {
    color: ${(props) => props.isActive ? props.theme.colors.highlight : props.theme.colors.primary.on_background_light};
  }
  height: 100%;
  cursor: pointer;
`;

export default NavButton;
