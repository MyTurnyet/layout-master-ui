import React, {FunctionComponent} from "react";
import {useAxios} from "use-axios-client";

const Dashboard: FunctionComponent = () => {
    const {data, error, loading} = useAxios<string[]>(
        "https://layout-master-api.herokuapp.com/models/aar"
    )
    return (
        <div className={"Dashboard"}>
            {loading && <div>Loading!!</div>}
            {error && <div>ERROR!!! {error}</div>}
            <br/>
            stuff here:
            <ul>
                {data && data.map((designation: string, index: number) => {
                        return (<li key={index}>
                            {designation}
                        </li>);
                    }
                )}
            </ul>
        </div>
    )
}

export default Dashboard

