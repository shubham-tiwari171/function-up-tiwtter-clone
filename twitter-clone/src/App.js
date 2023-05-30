
import Login from './components/molecules/login/Login';
import logo from './logo.svg';
//import './App.css';

import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Login/>
        <Routes>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
