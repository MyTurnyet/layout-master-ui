import React from 'react';
import {render, screen} from '@testing-library/react';
import CarriedGoodsList from "components/cartypes/CarriedGoodsList";

describe(' CarriedGoodList ', () => {
    it('should ', () => {
        const carriedGoodsList: CarriedGoodsList = {
            goods: ["Food", "Logs", "Parts"]
        }
        render(<CarriedGoodsList {...carriedGoodsList}/>);
        const element = screen.getByText("Food, Logs, Parts");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("CarriedGoodsList");
    })
});
