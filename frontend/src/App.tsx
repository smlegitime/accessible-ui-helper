import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from './pages/Home/index';
import {Scan} from './pages/Scan/index';
import { TestOutput } from './pages/test/TestOutput';

function App() {
  const HomePage =  <Home />
  const ScanPage = <Scan />

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={HomePage} />
          <Route path="/scan" element={ScanPage} />
          <Route path='/output' element={<TestOutput />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
