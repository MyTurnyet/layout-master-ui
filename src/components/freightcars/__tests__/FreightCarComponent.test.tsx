import React from 'react';
import {render, screen} from '@testing-library/react';
import FreightCarComponent, {FreightCar} from "../FreightCarComponent";
import {CarType} from "../../cartypes/CarTypeComponent";

const boxcarType: CarType = {
    aarDesignation: "XM",
    carriedGoodsList: ["Ingredients", "Logs", "Parts"],
    id: "8c4c14c7-83a7-4e9d-a29d-35f5297f52c0"
}
const gondolaType: CarType = {
    aarDesignation: "GS",
    carriedGoodsList: ["ScrapMetal", "MetalScraps", "Logs", "Aggregates"],
    id: "8f007515-e1d7-42a1-b25e-0e849b64b8a0"
}

const boxcar1234_LOADED: FreightCar = {
    id: "testid1234",
    roadName: "PNWR",
    roadNumber: 1234,
    carriedGoods: "Parts",
    carType: boxcarType
};

const boxcar1456_EMPTY: FreightCar = {
    id: "testid1234",
    roadName: "PNWR",
    roadNumber: 1234,
    carriedGoods: "EMPTY",
    carType: boxcarType
};

describe(' FreightCarComponent ', () => {
    it('should display freight car', () => {
        render(<FreightCarComponent {...boxcar1234_LOADED} />);

        const roadNameElement = screen.getByText("PNWR");
        expect(roadNameElement).toBeInTheDocument();
        expect(roadNameElement.parentElement).toHaveClass("FreightCar");
        expect(roadNameElement).toHaveClass("RoadName");

        const roadNumberElement = screen.getByText("1234");
        expect(roadNumberElement).toBeInTheDocument();
        expect(roadNumberElement).toHaveClass("RoadNumber");
    })
    it('should show freight car as loaded with Parts', () => {
        render(<FreightCarComponent {...boxcar1234_LOADED}/>);

        const carriedGoodsElement = screen.getByText("Parts");
        expect(carriedGoodsElement).toBeInTheDocument()
        expect(carriedGoodsElement).toHaveClass("CarriedGoods")
        expect(carriedGoodsElement).toHaveClass("Loaded")
    });
    it('should show freight car as unloaded', () => {
        render(<FreightCarComponent {...boxcar1456_EMPTY}/>);

        const carriedGoodsElement = screen.getByText("unloaded");
        expect(carriedGoodsElement).toBeInTheDocument()
        expect(carriedGoodsElement).toHaveClass("CarriedGoods")
        expect(carriedGoodsElement).not.toHaveClass("Loaded")
    });
});
