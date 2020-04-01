import '@testing-library/jest-dom';
import React, {useState} from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Button from '../components/Button';

test('display loading text when button is cicked', () => {
    render(<Button action="text" isLoading={true}>Click to load</Button>);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('display loading icon when isLoading props is true', () => {
    const button = render(<Button action="icon" isLoading={true}>Click to load</Button>);
    expect(button).toMatchSnapshot();
})