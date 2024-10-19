import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/index';
// import Scan from './pages/Scan/ScanPage';
import {Scan} from './pages/Scan/index'

function App() {
  const [message, setMessage] = useState('');
   
  // useEffect(() => {
  //     axios.get('http://localhost:8000/')
  //         .then(response => setMessage(response.data))
  //         .catch(error => console.error(error));
  // }, []);

  console.log(message)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
