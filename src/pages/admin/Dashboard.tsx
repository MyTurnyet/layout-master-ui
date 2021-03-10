import React, {FunctionComponent} from "react";
import AarDesignation from "components/admin/AarDesignation";
import {GetAARDesignations} from "../../data/CarTypeData";

const Dashboard: FunctionComponent = () => {
    const {data, error, loading} = GetAARDesignations();
    return (
        <div className={"Dashboard"}>
            {loading && <div>Loading!!</div>}
            {error && <div>ERROR!!! {error}</div>}
            <br/>
            stuff here:
            <ul>
                {data && data.map((designation: string, index: number) => {
                        return (<li key={index}>
                            <AarDesignation initials={designation}/>
                        </li>);
                    }
                )}
            </ul>
        </div>
    )
}

export default Dashboard

