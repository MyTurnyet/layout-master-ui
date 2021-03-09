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
    it('should find home button text ', () => {
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
});
