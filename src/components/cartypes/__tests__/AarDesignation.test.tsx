import React from 'react';
import {render, screen} from '@testing-library/react';
import AarDesignation, {AarDesignationProps} from "../AarDesignation";
import {ThemeProvider} from "styled-components";
import defaultTheme from "../../../theme/theme";

describe(' AarDesignation ', () => {
    it('should have class and be in the document ', () => {
        const designation: AarDesignationProps = {
            initials: "GS"
        };
        render(
            <ThemeProvider theme={defaultTheme}>
                <AarDesignation {...designation} />
            </ThemeProvider>);
        const element = screen.getByText("GS");
        expect(element).toBeInTheDocument();
        expect(element).toMatchSnapshot();
    });
});
