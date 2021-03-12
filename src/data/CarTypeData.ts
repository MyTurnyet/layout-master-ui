import {useAxios} from "use-axios-client";
import {RequestState} from "use-axios-client/bin/useAxiosReducer";
import {CarType} from "../components/cartypes/CarTypeComponent";


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
