import React from 'react';
import {render, screen} from '@testing-library/react';
import Dashboard from "pages/admin/Dashboard";
import {GetAARDesignations, GetCarTypesList} from "data/CarTypeData";
import {mocked} from "ts-jest/utils";
import {CarTypeProps} from "components/cartypes/CarTypeComponent";

jest.mock(`data/CarTypeData`);

const aarDatafunction = mocked(GetAARDesignations, true);
const carTypesDatafunction = mocked(GetCarTypesList, true);
const boxcarType1: CarTypeProps = {
    aardesignation: "XM",
    carriedGoodsList: ["Ingredients", "Logs", "Parts"],
    id: "8c4c14c7-83a7-4e9d-a29d-35f5297f52c0"
}
const boxcarType2: CarTypeProps = {
    aardesignation: "GS",
    carriedGoodsList: ["ScrapMetal", "MetalScraps", "Logs", "Aggregates"],
    id: "8f007515-e1d7-42a1-b25e-0e849b64b8a0"
}

const carTypeData: CarTypeProps[] = [boxcarType1, boxcarType2];

describe(' Dashboard ', () => {
    it('should have stuff as text ', () => {
        carTypesDatafunction.mockImplementation(() => {
            return {
                refetch: jest.fn(),
                cancel: jest.fn(),
                loading: false,
                error: undefined,
                data: carTypeData
            };
        });
            aarDatafunction.mockImplementation(() => {
            return {
                data: ["XM", "GS"],
                error: undefined,
                loading: false,
                cancel: jest.fn(),
                refetch: jest.fn()
            };
        });
        render(<Dashboard/>);
        expect(screen.getByText("XM")).toBeInTheDocument()
        expect(screen.getByText("GS")).toBeInTheDocument()
    });
});
