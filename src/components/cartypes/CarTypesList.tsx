import React, {FunctionComponent} from "react";
import {GetCarTypesList} from "data/CarTypeData";
import CarTypeComponent, {CarType} from "./CarTypeComponent";


const CarTypesList: FunctionComponent =
    () => {
        const carTypesListData = GetCarTypesList();
        const carTypeData: CarType[] | undefined = carTypesListData.data;

        const loading = carTypesListData.loading;
        const error = carTypesListData.error;
        return (<div className={`CarTypesList`}>
            {loading && <div>Loading!!</div>}
            {error && <div>ERROR!!! {error}</div>}

            {carTypeData && carTypeData.map((carType) =>
                (
                    <CarTypeComponent key={carType.id} {...carType}/>
                )
            )}
        </div>);
    };

export default CarTypesList;

