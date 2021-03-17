import {useAxios} from "use-axios-client";
import {RequestState} from "use-axios-client/bin/useAxiosReducer";
import {CarTypeComponent} from "../components/cartypes/CarTypeComponent";
import {FreightCar} from "../components/freightcars/FreightCarComponent";


interface RequestFunctions {
    cancel: () => void;
    refetch: () => Promise<void>;
}

export const GetAARDesignations = ():RequestState<string[]> & RequestFunctions => {
    return useAxios<string[]>(
        "https://layout-master-api.herokuapp.com/models/aar"
    );
}

export const GetCarTypesList = ():RequestState<CarType[]> & RequestFunctions=>{
    return useAxios<CarType[]>(
        "https://layout-master-api.herokuapp.com/models/types"
    );
}

export const GetAllFreightCars=():RequestState<FreightCar[]> & RequestFunctions=> {
    return useAxios<FreightCar[]>(
        "https://layout-master-api.herokuapp.com/inventory/freightcars"
    );
}
