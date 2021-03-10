import React from 'react'
import {render, screen} from '@testing-library/react';
import HomePage, {HomePageProps} from "../HomePage";

describe(' HomePage ', () => {
    it('should show name when username exists', () => {
        const props: HomePageProps = {
            userName: "Paige"
        }
        render(<HomePage {...props}/>);
        const element = screen.getByText("Hello Paige");
        expect(element).toBeInTheDocument()
    })

    it('should say Hello! when no username exists', () => {
        render(<HomePage />);
        const element = screen.getByText("Hello!");
        expect(element).toBeInTheDocument()
    })
});
