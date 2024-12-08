/**
 * @fileoverview Test file for Scan Component
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import { render, screen } from '@testing-library/react';
import { Scan } from '../pages/Scan/index'; 
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Home } from '../pages/Home';


test('navigates home page on scan because pages is empty', () => {
  const HomePage =  <Home />
  const ScanPage = <Scan />

  const App = () => {return (
    <div className="App">
    <MemoryRouter>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/scan" element={ScanPage} />
      </Routes>
      </MemoryRouter>
    </div>)}

  render(
      <App />
  );
  expect(screen.getByText("Scan, review, and implement code fixes to improve your website’s accessibility to reach a wider audience")).toBeInTheDocument();
});

