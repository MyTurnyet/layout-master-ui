import React, {FunctionComponent} from "react";
import styled from "styled-components";

export interface AarDesignationProps {
    initials: string;
}

const StyledAarDesignation = styled.div`
  text-align: center;
  padding: 5px;
  font-size: 1.2em;
  width: 2.4em;
  color: ${(props => props.theme.colors.tertiary.color)};
  background-color: ${(props => props.theme.colors.secondary.light)};
`;

const AarDesignationComponent: FunctionComponent<AarDesignationProps>
    = (props) => {
    return (
        <StyledAarDesignation >{props.initials}</StyledAarDesignation>
    )
}

export default AarDesignationComponent;
