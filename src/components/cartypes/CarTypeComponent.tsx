import React, {FunctionComponent} from "react";
import AarDesignation from "./AarDesignation";
import CarriedGoodsList from "./CarriedGoodsList";

import "./CarTypeComponent.scss";

export type CarType = {
    aarDesignation: string;
    carriedGoodsList: string[];
    id: string;
}

const CarTypeComponent: FunctionComponent<CarType> = (props: CarType & { children?: React.ReactNode })=>{
    return (<div className={`CarType`} id={props.id}>
        <AarDesignation initials={props.aarDesignation}/>
        <CarriedGoodsList goods={props.carriedGoodsList}/>
    </div>);
}
export default CarTypeComponent;
