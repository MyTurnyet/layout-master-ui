import React, {FunctionComponent} from "react";
import styled from "styled-components";

interface CarriedGoodsList {
    goods: string[]
}

const StyledCarriedGoodsList = styled.div`
  color: ${(props) => props.theme.colors.tertiary.light};
  padding: 5px 10px;
  font-size: 1em;`;

const CarriedGoodsList: FunctionComponent<CarriedGoodsList> = (props) => {
    return (<StyledCarriedGoodsList className={`CarriedGoodsList`}>
        {props.goods.join(", ")}
    </StyledCarriedGoodsList>);
}

export default CarriedGoodsList;
