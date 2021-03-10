import React from 'react';
import {render, screen} from '@testing-library/react';
import AarDesignation, {AarDesignationProps} from "../AarDesignation";

describe(' AarDesignation ', () => {
    it('should have class and be in the document ', () => {
        const designation: AarDesignationProps = {
            initials: "GS"
        };
        render(<AarDesignation {...designation} />);
        const element = screen.getByText("GS");
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass("AarDesignation");
    });
});
