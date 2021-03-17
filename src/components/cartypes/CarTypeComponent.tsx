import React, {FunctionComponent} from "react";
import AarDesignation from "./AarDesignation";
import CarriedGoodsList from "./CarriedGoodsList";

import styled from "styled-components";

export type CarType = {
    aarDesignation: string;
    carriedGoodsList: string[];
    id: string;
}

const StyledCarType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 5px;
  height: 100%;
  width: auto;
`;

const CarTypeComponent: FunctionComponent<CarType> = (props: CarType & { children?: React.ReactNode })=>{
    return (<StyledCarType id={props.id}>
        <AarDesignation initials={props.aarDesignation}/>
        <CarriedGoodsList goods={props.carriedGoodsList}/>
    </StyledCarType>);
}
export default CarTypeComponent;
