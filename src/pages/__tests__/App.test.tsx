import {render, screen} from '@testing-library/react';
import React from 'react'
import App from '../App';
import {MemoryRouter} from "react-router-dom";

describe(' App ', () => {
    it('renders site name', () => {
        const siteName = "foo!";
        render(<MemoryRouter>
                <App siteName={siteName}/>
            </MemoryRouter>
        );
        const siteNameElement = screen.getByText("foo!");
        const navBarElement = screen.getByRole('link',{name: "Home"});
        expect(siteNameElement).toBeInTheDocument();
        expect(navBarElement).toBeInTheDocument();
    });
});
