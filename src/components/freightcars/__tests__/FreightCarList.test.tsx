import React from 'react';
import {render, screen} from '@testing-library/react';
import FreightCarList from "../FreightCarList";
// import {mocked} from "ts-jest/utils";
// import {GetAllFreightCars, GetCarTypesList} from "../../../data/CarTypeData";

// jest.mock(`data/CarTypeData`);
//
// const getAllFreightCarsDatafunction = mocked(GetAllFreightCars, true);

describe(' FreightCarList ', () => {
    it('should have classname', () => {
        // getAllFreightCarsDatafunction.mockImplementation(() => {
        //     return {
        //         refetch: jest.fn(),
        //         cancel: jest.fn(),
        //         loading: false,
        //         error: undefined,
        //         data: carTypeData
        //     }

        render(<FreightCarList/>);
        const element = screen.getByText("Freight Car List");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("FreightCarList");
    });
});
