import React, {FunctionComponent} from "react";
import "./CarriedGoodsList.scss";

interface CarriedGoodsList {
    goods: string[]
}

const CarriedGoodsList: FunctionComponent<CarriedGoodsList> = (props) => {
    return (<div className={`CarriedGoodsList`}>
        {props.goods.join(", ")}
    </div>);
}

export default CarriedGoodsList;
