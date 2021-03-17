import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactElement} from "react";
import {Link} from "react-router-dom";
import {PageProps} from "pages/App";
import {IconLookup} from "@fortawesome/free-solid-svg-icons";
import {findIconDefinition} from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

const StyledHeader = styled.div(props =>
    `display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 50px;
  width: 100%;

  padding: 0 20px;

  font-family: ${props.theme.font.logo};
  font-size: 24px;
  font-weight: bold;
  color: ${props.theme.colors.secondary.on_background};
  text-transform: uppercase;
  
  background: ${props.theme.colors.highlight};
  
  a {
    color: inherit;
    text-decoration: none;
  }
`);

const IconDiv = styled.div`
  padding: 0px 10px;
`;

class Header extends React.Component<PageProps> {
    render(): ReactElement {
        const icons = ["train", "dragon", "jedi", "code-branch", "poop", "puzzle-piece", "subway", "horse"];
        const currentIcon = icons[Math.floor(Math.random() * icons.length)];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const iconLookup: IconLookup = {prefix: "fas", iconName: currentIcon};
        const iconDefinition = findIconDefinition(iconLookup);
        return (
            <StyledHeader>
                <IconDiv>
                    <FontAwesomeIcon icon={iconDefinition}/>
                </IconDiv>
                <Link to={"/"}>
                    {this.props.siteName}
                </Link>
            </StyledHeader>
        );
    }
}

export default Header;
