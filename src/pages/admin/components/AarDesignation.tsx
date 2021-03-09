import React, {FunctionComponent} from "react";

export type AarDesignationProps = {
    initials:string;
    description?:string;
}

const AarDesignation:FunctionComponent<AarDesignationProps>
    = (props)=>
{
    return (
        <div className={`AarDesignation`}>{props.initials}</div>
    )
}
