import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import App from "pages/App";

describe(' Header ', () => {
    it('should have HEADER text', () => {
        render(<MemoryRouter>
                <App siteName={"FOO!"}/>
            </MemoryRouter>
        );
        const element = screen.getByText("FOO!");
        expect(element).toBeInTheDocument()
    });
});
