import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RightSidebar from './components/organisms/RightSidebar/RightSidebar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App">App</div>}></Route>
      </Routes>
    </BrowserRouter>
    <RightSidebar/>
    
    </>
  );
}

export default App;
