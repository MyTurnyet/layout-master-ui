import React, {FunctionComponent} from "react";
import {GetCarTypesList} from "data/CarTypeData";
import AarDesignation from "./AarDesignation";

export type CarType = {
    designation: string;
    carriedGoodsList: string[];
    id: string;
}

const CarTypesList: FunctionComponent =
    (props) => {
        const carTypesListData = GetCarTypesList();
        const carTypeData: CarType[] | undefined = carTypesListData.data;
        return (<div className={`CarTypesList`}>
            {carTypeData && carTypeData.map((carType, index) =>
                (
                    <div key={carType.id}>
                        <AarDesignation initials={carType.designation}/>
                        <p>{carType.carriedGoodsList.join(", ")}</p>
                    </div>

                )
            )}
        </div>)
            ;
    }
;

export default CarTypesList;

