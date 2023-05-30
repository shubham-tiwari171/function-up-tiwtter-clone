import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidenavbar from './components/molecules/Sidenavbar/Sidenavbar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<div className="App"><Sidenavbar /></div>}></Route> */}
        <Route path="/" element={<div className="App"><Sidenavbar /></div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
