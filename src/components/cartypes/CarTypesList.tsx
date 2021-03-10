import React, {FunctionComponent} from "react";
import {GetCarTypesList} from "data/CarTypeData";
import CarType, {CarTypeProps} from "./CarType";


const CarTypesList: FunctionComponent =
    () => {
        const carTypesListData = GetCarTypesList();
        const carTypeData: CarTypeProps[] | undefined = carTypesListData.data;

        const loading = carTypesListData.loading;
        const error = carTypesListData.error;
        return (<div className={`CarTypesList`}>
            {loading && <div>Loading!!</div>}
            {error && <div>ERROR!!! {error}</div>}

            {carTypeData && carTypeData.map((carType) =>
                (
                    <CarType key={carType.id} {...carType}/>
                )
            )}
        </div>);
    };

export default CarTypesList;

