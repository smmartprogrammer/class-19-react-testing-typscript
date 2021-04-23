import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/II RAAM II/i);
	expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
// 	const { getByText } = render(<App />);
// 	const linkElement = getByText(/Hello World/i);
// 	expect(linkElement.toBeInTheDocument());
// });
