import React, {FunctionComponent} from "react";
import {CarType} from "../cartypes/CarTypeComponent";

export type FreightCar = {
    id: string;
    roadName: string;
    roadNumber: number;
    carType: CarType;
    carriedGoods: string;
}

const FreightCarComponent:FunctionComponent<FreightCar> = (props)=>{
    const isNotLoaded = props.carriedGoods=="EMPTY";
    return <div className={`FreightCar`}>
        <div className={`RoadName`}>{props.roadName}</div>
        <div className={`RoadNumber`}>{props.roadNumber}</div>
        <div className={`CarriedGoods ${isNotLoaded?'':'Loaded'}`}>
            {isNotLoaded?'unloaded':props.carriedGoods}
        </div>
    </div>
}

export default FreightCarComponent;
