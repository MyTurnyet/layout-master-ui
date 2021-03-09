import React from 'react';
import {render, screen} from '@testing-library/react';
import Dashboard from "../Dashboard";

describe(' Dashboard ', () => {
    it('should have DASHBOARD! as text ', () => {
        render(<Dashboard/>);
        expect(screen.getByText("DASHBOARD!")).toBeInTheDocument();
    });
});
