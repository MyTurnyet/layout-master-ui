import React from 'react';
import {render, screen} from '@testing-library/react';
import CarTypesList from "components/cartypes/CarTypesList";
import {mocked} from "ts-jest/utils";
import {GetCarTypesList} from "data/CarTypeData";
import {CarType} from "../CarTypeComponent";

jest.mock(`data/CarTypeData`);

const carTypesDatafunction = mocked(GetCarTypesList, true);

describe(' CarTypesList ', () => {
    it('should have two CarTypes ', () => {
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

        const carTypeData: CarType[] = [boxcarType, gondolaType];
        carTypesDatafunction.mockImplementation(() => {
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
        expect(screen.getByText(boxcarType.carriedGoodsList.join(", "))).toBeInTheDocument()
        expect(screen.getByText("GS")).toBeInTheDocument()
        expect(screen.getByText(gondolaType.carriedGoodsList.join(", "))).toBeInTheDocument()
    })
});
