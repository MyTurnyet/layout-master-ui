import {useAxios} from "use-axios-client";
import {CarType} from "../components/CarTypesList";


export const GetAARDesignations = () => {
    return useAxios<string[]>(
        "https://layout-master-api.herokuapp.com/models/aar"
    )
}

export const GetCarTypesList = ()=>{
    return useAxios<CarType[]>(
        "https://layout-master-api.herokuapp.com/models/types"
    )
}
