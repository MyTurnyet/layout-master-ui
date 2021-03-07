import {render, screen} from '@testing-library/react';
import React from 'react'
import App from '../App';

describe(' App ', () => {
    it('renders site name', () => {
        const siteName = "foo!";
        render(<App siteName={siteName}/>);
        const siteNameElement = screen.getByText('HEADER');
        const navBarElement = screen.getByText('NAVBAR');
        expect(siteNameElement).toBeInTheDocument();
        expect(navBarElement).toBeInTheDocument();
    });
    it('renders main with "APP Page"', () => {
        render(<App siteName={"foo!"}/>);
        const linkElement = screen.getByText(/App Page/i);
        expect(linkElement).toBeInTheDocument();
    });
});
