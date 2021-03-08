import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import App from "../../App";


describe(' layout ', () => {
    it('should have a header with site name', () => {
        const siteName = "HEADER";
        render(<MemoryRouter>
                <App siteName={siteName}/>
            </MemoryRouter>
        );
        const headerElement = screen.getByText(siteName);
        expect(headerElement).toBeInTheDocument();

    });
});
