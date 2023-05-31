import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Widgets from './components/molecules/right-sidebar/Widgets';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Widgets />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
