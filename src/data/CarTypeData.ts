import {useAxios} from "use-axios-client";
import {RequestState} from "use-axios-client/bin/useAxiosReducer";
import {CarTypeProps} from "../components/cartypes/CarTypeComponent";


interface RequestFunctions {
    cancel: () => void;
    refetch: () => Promise<void>;
}

export const GetAARDesignations = ():RequestState<string[]> & RequestFunctions => {
    return useAxios<string[]>(
        "https://layout-master-api.herokuapp.com/models/aar"
    );
}

export const GetCarTypesList = ():RequestState<CarTypeProps[]> & RequestFunctions=>{
    return useAxios<CarTypeProps[]>(
        "https://layout-master-api.herokuapp.com/models/types"
    );
}
