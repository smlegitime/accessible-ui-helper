/**
 * @fileoverview React App component that routes pages
 * @author Stephanie Olaiya
 * @copyright 2024 Accessible UI Helper. All rights reserved.
 */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/index';
import {Scan} from './pages/Scan/index';

/**
 * Main App react component with router
 */
function App() {
  const HomePage =  <Home />
  const ScanPage = <Scan />

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          Map urrent pages in site to their directories
          <Route path="/" element={HomePage} />
          <Route path="/scan" element={ScanPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
