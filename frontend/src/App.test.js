import { render, screen } from '@testing-library/react';
import App from './App';

test('checks for a shopping list', () => {
  render(<App />);
  const linkElement = screen.getByText(/shopping list/i);
  expect(linkElement).toBeInTheDocument();
});
