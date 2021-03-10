import React from 'react';
import {render, screen} from '@testing-library/react';
import Dashboard from "pages/admin/Dashboard";
import {GetAARDesignations} from "data/CarTypeData";
import {mocked} from "ts-jest/utils";

jest.mock(`data/CarTypeData`);

const aarDatafunction = mocked(GetAARDesignations, true);

describe(' Dashboard ', () => {
    it('should have stuff as text ', () => {
        aarDatafunction.mockImplementation(() => {
            return {
                data: ["XM", "GS"],
                error: undefined,
                loading: false,
                cancel: jest.fn(),
                refetch: jest.fn()
            };
        })
        render(<Dashboard/>);
        expect(screen.getByText("XM")).toBeInTheDocument()
        expect(screen.getByText("GS")).toBeInTheDocument()
    });
});
