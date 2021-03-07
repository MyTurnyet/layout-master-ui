import React from 'react';
import {render, screen} from '@testing-library/react';
import Layout from "../Layout";


describe(' layout ', () => {
    it('should have a header with site name', () => {
        const siteName = "HEADER";
        render(<Layout siteName={siteName}/>);
        const headerElement = screen.getByText(siteName);
        expect(headerElement).toBeInTheDocument();

    });
});
