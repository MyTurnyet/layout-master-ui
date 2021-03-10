import React from 'react';
import {render, screen} from '@testing-library/react';
import CarType, {CarTypeProps} from "../CarType";

describe(' CarType ', () => {
    it('should render with AarType ', () => {
        const carType: CarTypeProps = {
            aarDesignation: "GS",
            carriedGoodsList: ["Logs", "Parts"],
            id: "12345"
        }
        render(<CarType {...carType} />);
        const aarElement = screen.getByText("GS");
        expect(aarElement).toBeInTheDocument()
        expect(aarElement).toHaveClass("AarDesignation")
        expect(aarElement.parentElement).toHaveClass("CarType")

        const goodsElement = screen.getByText("Logs, Parts");
        expect(goodsElement).toBeInTheDocument()
         expect(goodsElement).toHaveClass("CarriedGoodsList")
         expect(goodsElement.parentElement).toHaveClass("CarType")
    })
});
