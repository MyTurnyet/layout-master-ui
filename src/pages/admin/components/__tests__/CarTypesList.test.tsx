import React from 'react';
import {render, screen} from '@testing-library/react';
import CarTypesList, {CarType} from "../CarTypesList";
import {mocked} from "ts-jest/utils";
import {GetCarTypesList} from "../../data/CarTypeData";

jest.mock(`../../data/AARDesignationData`);

const aarDatafunction = mocked(GetCarTypesList, true);
describe(' CarTypesList ', () => {
    it('should have one CarType ', () => {
        const boxcarType1: CarType = {
            designation: "XM",
            carriedGoodsList: ["Ingredients", "Logs", "Parts"],
            id: "8c4c14c7-83a7-4e9d-a29d-35f5297f52c0"
        }
        const boxcarType2: CarType = {
            designation: "GS",
            carriedGoodsList: ["ScrapMetal", "MetalScraps", "Logs", "Aggregates"],
            id: "8f007515-e1d7-42a1-b25e-0e849b64b8a0"
        }

        const carTypeData: CarType[] = [boxcarType1, boxcarType2];
        aarDatafunction.mockImplementation(() => {
            return {
                refetch: jest.fn(),
                cancel: jest.fn(),
                loading: false,
                error: undefined,
                data: carTypeData
            }
        })

        render(<CarTypesList/>);
        expect(screen.getByText("XM")).toBeInTheDocument()
        expect(screen.getByText(boxcarType1.carriedGoodsList.join(", "))).toBeInTheDocument()
        expect(screen.getByText("GS")).toBeInTheDocument()
        expect(screen.getByText(boxcarType2.carriedGoodsList.join(", "))).toBeInTheDocument()
    })
});
