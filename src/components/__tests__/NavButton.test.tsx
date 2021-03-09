import React from 'react';
import {render, screen} from '@testing-library/react';
import NavButton, {NavButtonProps} from "../NavButton";
import {MemoryRouter} from "react-router-dom";

describe(' NavButton ', () => {
    it('should render label, icon and point to url ', () => {
        const buttonProps: NavButtonProps = {
            path: './foo',
            label: 'Testing',
            icon: 'home'
        }
        render(
            <MemoryRouter>
                <NavButton {...buttonProps}/>
            </MemoryRouter>);
        const link = screen.getByRole('link', {name: '/Testing/i'});

        expect(link).toBeInTheDocument()
    });
});
