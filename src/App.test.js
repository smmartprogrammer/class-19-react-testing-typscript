import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/II RAAM II/i);
  expect(linkElement).toBeInTheDocument();
});
