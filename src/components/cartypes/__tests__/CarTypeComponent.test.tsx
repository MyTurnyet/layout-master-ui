import React from 'react';
import {render, screen} from '@testing-library/react';
import CarType, {CarTypeProps} from "../CarType";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../../../theme/theme";

describe(' CarType ', () => {
    it('should render with AarType ', () => {
        const carType: CarTypeProps = {
            aarDesignation: "GS",
            carriedGoodsList: ["Logs", "Parts"],
            id: "12345"
        }

        render(
            <ThemeProvider theme={defaultTheme}>
                <CarType {...carType} />
            </ThemeProvider>
        );

        const aarElement = screen.getByText("GS");
        expect(aarElement).toBeInTheDocument()

        const goodsElement = screen.getByText("Logs, Parts");
        expect(goodsElement).toBeInTheDocument()

        expect(aarElement.parentElement).toMatchSnapshot()
    })
});
