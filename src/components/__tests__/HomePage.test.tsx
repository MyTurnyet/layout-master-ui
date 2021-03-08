import React from 'react';
import {render, screen} from '@testing-library/react';
import HomePage, {HomePageProps} from "../../HomePage";

describe(' HomePage ', () => {
    it('should say Hello!', () => {
        render(<HomePage/>);
        const linkElement = screen.getByText("Hello!");
        expect(linkElement).toBeInTheDocument();
    });

    it('should say Hello Paige', () => {
        const props: HomePageProps = {
            userName: "Paige"
        }
        render(<HomePage {...props}/>
        );
        const linkElement = screen.getByText("Hello Paige");
        expect(linkElement).toBeInTheDocument();
    });
});
