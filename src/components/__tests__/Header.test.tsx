import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from "../Header";

describe(' Header ', () => {
    it('should have HEADER text', () => {
        render(<Header siteName={"FOO"}/>);
        const element = screen.getByText("HEADER");
        expect(element).toBeInTheDocument()
    });
});
