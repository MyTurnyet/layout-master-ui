import React from 'react';
import {render, screen} from '@testing-library/react';
import AboutPage from "../AboutPage";

describe(' AboutPage ', () => {
    it('should ', () => {
        render(<AboutPage/>);
        const element = screen.getByText("About Page!");
        expect(element).toBeInTheDocument()
    });
});
