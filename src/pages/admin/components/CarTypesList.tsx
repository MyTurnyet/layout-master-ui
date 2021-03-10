import React, {FunctionComponent} from "react";
import {GetCarTypesList} from "../data/CarTypeData";

export type CarType = {
    designation: string;
    carriedGoodsList: string[];
    id: string;
}

const CarTypesList: FunctionComponent =
    (props) => {
    const carTypesListData = GetCarTypesList();
        const carTypeData:CarType[] | undefined = carTypesListData.data;
        return (<div className={`CarTypesList`}>
            {carTypeData && carTypeData.map((carType, index) =>
                (
                    <div key={carType.id}>
                        <p>{carType.designation}</p>
                        <p>{carType.carriedGoodsList.join(", ")}</p>
                    </div>

                )
            )}
        </div>)
            ;
    }
;

export default CarTypesList;

