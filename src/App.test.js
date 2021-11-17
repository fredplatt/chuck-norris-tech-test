import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chuck Norris is no joke./i);
  expect(linkElement).toBeInTheDocument();
});

test('renders email component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Warn your friends/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders joke', () => {
  render(<App />);
  const linkElement = screen.getByText(/Chuck me another/i);
  expect(linkElement).toBeInTheDocument();
});
