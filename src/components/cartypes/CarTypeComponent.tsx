import React, {FunctionComponent} from "react";
import AarDesignation from "./AarDesignation";
import CarriedGoodsList from "./CarriedGoodsList";

import "./CarTypeComponent.scss";

export type CarTypeProps = {
    aarDesignation: string;
    carriedGoodsList: string[];
    id: string;
}

const CarTypeComponent: FunctionComponent<CarTypeProps> = (props: CarTypeProps & { children?: React.ReactNode })=>{
    return (<div className={`CarType`} id={props.id}>
        <AarDesignation initials={props.aarDesignation}/>
        <CarriedGoodsList goods={props.carriedGoodsList}/>
    </div>);
}
export default CarTypeComponent;
