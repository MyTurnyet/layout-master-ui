import React from 'react';
import {render, screen} from '@testing-library/react';
import StyledNavButton, {NavButtonProp} from "components/NavButton";
import {MemoryRouter} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../../theme/theme";

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
                <ThemeProvider theme={defaultTheme}>
                    <StyledNavButton {...buttonProps} isActive={false}/>
                </ThemeProvider>
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
                <ThemeProvider theme={defaultTheme}>
                    <StyledNavButton {...buttonProps} isActive={true}/>
                </ThemeProvider>
            </MemoryRouter>);
        screen.debug()
        const link = screen.getByRole('link', {name: "Testing"});
        // expect(link.parentElement).toHaveClass('active')
        expect(link).toBeInTheDocument()
    });
});
