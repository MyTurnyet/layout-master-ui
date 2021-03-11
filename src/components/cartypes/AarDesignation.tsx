import React, {FunctionComponent} from "react";

import "./AarDesignation.scss";

export interface AarDesignationProps {
    initials:string;
}

const AarDesignation:FunctionComponent<AarDesignationProps>
    = (props)=>
{
    return (
        <div className={`AarDesignation`}>{props.initials}</div>
    )
}

export default AarDesignation;
