import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import NavBar, {NavBarProps} from "../NavBar";
import {faHome} from "@fortawesome/free-solid-svg-icons";

describe(' NavBar ', () => {
    it('should find home button text ', () => {
        const buttonOne = {
            label: "home",
            path: "/",
            icon: faHome,
        }

        const navbarProps: NavBarProps = {
            buttons: [buttonOne],
        }
        render(
            <MemoryRouter>
                <NavBar {...navbarProps}/>
            </MemoryRouter>);
        screen.debug()
        const element = screen.getByText('home');
        expect(element).toBeInTheDocument();
    });
});
