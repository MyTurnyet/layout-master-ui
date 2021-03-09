import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import NavBar, {NavBarProps} from "../NavBar";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";

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
                <NavBar {...navbarProps}/>
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
                <NavBar {...navbarProps}/>
            </MemoryRouter>);
        const elements = screen.getAllByRole('link');
        expect(elements).toHaveLength(2)
        expect(screen.getByText("about")).toBeInTheDocument()
        expect(screen.getByText("home")).toBeInTheDocument()
    });
});
