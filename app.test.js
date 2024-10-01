// app.test.js
import { render, screen } from '@testing-library/react';
import App from './app';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Task Manager/i);
  expect(linkElement).toBeInTheDocument();
});
