import React from 'react';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import NavBar, {NavBarProps} from "../NavBar";
import {NavButtonProps} from "../NavButton";
import {faHome} from "@fortawesome/free-solid-svg-icons";

describe(' NavBar ', () => {
    it('should find NAVBAR text ', () => {
        const buttonOne: NavButtonProps = {
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
        const element = screen.getByText('NAVBAR');
        expect(element).toBeInTheDocument();
    });
});
