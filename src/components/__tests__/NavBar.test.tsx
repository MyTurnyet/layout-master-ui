import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import NavBar, {NavBarProps} from "components/NavBar";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../../theme/theme";

describe(' NavBar ', () => {
    beforeAll(() => {
        library.add(fas);
    })
    it('should find one button in NavBar', () => {
        const buttonOne = {
            label: "home",
            path: "/",
            icon: "home",
        }

        const navbarProps: NavBarProps = {
            buttons: [buttonOne],
        }
        render(
            <MemoryRouter>
                <ThemeProvider theme={defaultTheme}>
                    <NavBar {...navbarProps}/>
                </ThemeProvider>
            </MemoryRouter>);
        const element = screen.getByText('home');
        expect(element).toBeInTheDocument();
    });

    it('should find two buttons in NavBar', () => {
        const buttonOne = {
            label: "home",
            path: "/",
            icon: "home",
        }
        const buttonTwo = {
            label: "about",
            path: "/about",
            icon: "home",
        }

        const navbarProps: NavBarProps = {
            buttons: [buttonOne, buttonTwo],
        }
        render(
            <MemoryRouter>
                <ThemeProvider theme={defaultTheme}>
                    <NavBar {...navbarProps}/>
                </ThemeProvider>
            </MemoryRouter>);
        const elements = screen.getAllByRole('link');
        expect(elements).toHaveLength(2)
        expect(screen.getByText("about")).toBeInTheDocument()
        expect(screen.getByText("home")).toBeInTheDocument()
    });
});
