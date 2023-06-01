// import logo from './logo.svg';
import './App.css';
import PostSection from "./components/molecules/Post_Section"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
    <PostSection/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="App"></div>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
