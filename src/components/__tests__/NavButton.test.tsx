import React from 'react';
import {render, screen} from '@testing-library/react';
import NavButton, {NavButtonProp} from "components/NavButton";
import {MemoryRouter} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

describe(' NavButton ', () => {
    beforeAll(() => {
        library.add(fas);
    })
    it('should render not active label, icon and point to url ', () => {
        const buttonProps: NavButtonProp = {
            path: './foo',
            label: 'Testing',
            icon: 'home'
        }
        render(
            <MemoryRouter>
                <NavButton {...buttonProps} isActive={false}/>
            </MemoryRouter>);
        const link = screen.getByRole('link', {name: "Testing"});
        expect(link).not.toHaveClass('active')
        expect(link).toBeInTheDocument()
    });
    it('should render active label, icon and point to url ', () => {
        const buttonProps: NavButtonProp = {
            path: './foo',
            label: 'Testing',
            icon: 'home'
        }
        render(
            <MemoryRouter>
                <NavButton {...buttonProps} isActive={true}/>
            </MemoryRouter>);
        screen.debug()
        const link = screen.getByRole('link', {name: "Testing"});
        expect(link.parentElement).toHaveClass('active')
        expect(link).toBeInTheDocument()
    });
});
