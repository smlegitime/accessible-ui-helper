import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('navigates home page on scan because pages is empty', () => {
  render(
      <App />
  );
  expect(screen.getByText("Scan, review, and implement code fixes to improve your website’s accessibility to reach a wider audience")).toBeInTheDocument();
});
