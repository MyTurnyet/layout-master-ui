import React, {FunctionComponent} from "react";
import CarTypesList from "../../components/cartypes/CarTypesList";

const Dashboard: FunctionComponent = () => {
    return (
        <div className={"Dashboard"}>
            <div>
                CarTypeData:
                <CarTypesList/>
            </div>
        </div>
    )
}

export default Dashboard

