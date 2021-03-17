import React from 'react';
import {render, screen} from '@testing-library/react';
import CarriedGoodsList from "components/cartypes/CarriedGoodsList";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../../../theme/theme";

describe(' CarriedGoodList ', () => {
    it('should ', () => {
        const carriedGoodsList: CarriedGoodsList = {
            goods: ["Food", "Logs", "Parts"]
        }
        render(
            <ThemeProvider theme={defaultTheme}>
                <CarriedGoodsList {...carriedGoodsList}/>
            </ThemeProvider>);

        const element = screen.getByText("Food, Logs, Parts");
        expect(element).toBeInTheDocument();
        expect(element).toMatchSnapshot();
    })
});
