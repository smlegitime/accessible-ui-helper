import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/index';
import {Scan} from './pages/Scan/index';

function App() {
  const HomePage =  <Home />
  const ScanPage = <Scan />

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/scan" element={ScanPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
