import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/molecules/login/Login';
import SignUp from './components/organisms/SignUp/SignUp';
import Sidenavbar from './components/molecules/Sidenavbar/Sidenavbar';
import Page from './components/page/Page';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Sidenavbar />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
