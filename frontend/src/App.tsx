import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/index';
// import Scan from './pages/Scan/ScanPage';
import {Scan} from './pages/Scan/index';
import SandboxViewer from "./pages/test/View";

function App() {
  const HomePage =  <Home />
  const ScanPage = <Scan />
  // useEffect(() => {
  //     axios.get('http://localhost:8000/')
  //         .then(response => setMessage(response.data))
  //         .catch(error => console.error(error));
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/scan" element={ScanPage} />
          <Route path="/test" element={<SandboxViewer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
