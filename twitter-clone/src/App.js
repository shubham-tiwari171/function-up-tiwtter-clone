import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/molecules/login/Login';
import SignUp from './components/organisms/SignUp/SignUp';
import Sidenavbar from './components/molecules/Sidenavbar/Sidenavbar';
import Page from './components/page/Page';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
function App() {
  const { isUserLoggedIn } = useSelector(state => state.users);
  console.log(isUserLoggedIn);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {isUserLoggedIn ? (
            <>
              <Route path="/" element={<Navigate to="/page" />} />
              <Route path="/page" element={<Page />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
