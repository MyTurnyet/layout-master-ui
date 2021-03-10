import React, {FunctionComponent} from "react";

interface CarriedGoodsList {
    goods: string[]
}

const CarriedGoodsList: FunctionComponent<CarriedGoodsList> = (props) => {
    return (<div className={`CarriedGoodsList`}>
        {props.goods.join(", ")}
    </div>);
}

export default CarriedGoodsList;
