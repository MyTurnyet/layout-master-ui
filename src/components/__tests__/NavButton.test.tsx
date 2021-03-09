import React from 'react';
import {render, screen} from '@testing-library/react';
import NavButton, {NavButtonProps} from "../NavButton";
import {MemoryRouter} from "react-router-dom";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";

describe(' NavButton ', () => {
    beforeAll(() => {
        library.add(fas);
    })
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
        const link = screen.getByRole('link', {name: "Testing"});

        expect(link).toBeInTheDocument()
    });
});
