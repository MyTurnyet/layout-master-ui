import React from 'react';
import {render, screen} from '@testing-library/react';
import NavBar from "../NavBar";

describe(' NavBar ', () => {
    it('should ', () => {
        render(<NavBar siteName={"FOO"}/>);
        const element = screen.getByText('NAVBAR');
        expect(element).toBeInTheDocument();
    });
});
